import { IResource } from '../models/resources.model';
import { Contracts } from 'src/app/shared/utils/contracts';
import { isPL } from '../models/filters.model';
import { HttpParams, HttpClient } from '@angular/common/http';
import { TaskService } from '../../../../core/task.service';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SettingsService } from './settings.service';
import { HttpParamEncoder } from 'src/app/shared/utils/http-encoder.model';

@Injectable({ providedIn:  'root' })
export class CompilerService {

    private _errors = [];
    private _warnings = [];
    private _problems = [];

    private _problemsCount = 0;
    private _warningsCount = 0;
    private _errorsCount = 0;

    private readonly compilation = {};

    active: IResource;

    readonly compiled = new Subject();

    get enabled() {
        return this.settings.get('compiler', 'enabled').value === true;
    }

    get problemsCount(): number {
        return this._problemsCount;
    }

    get warningsCount(): number {
        return this._warningsCount;
    }

    get errorsCount(): number {
        return this._errorsCount;
    }

    get allErrors() {
        return this._errors || (this._errors = []);
    }

    get allWarnings() {
        return this._warnings || (this._warnings = []);
    }

    get problems() {
        return this._problems || (this._problems = []);
    }

    constructor(
        private readonly http: HttpClient,
        private readonly task: TaskService,
        private readonly settings: SettingsService,
    ) {}

    errors(resource: IResource): any[] {
        const data = this.compilation[resource.path];
        if (data && data.ast) {
            return data.ast.__errors;
        }
        return [];
    }

    warnings(resource: IResource): any[] {
        const data = this.compilation[resource.path];
        if (data && data.ast) {
            return data.ast.__warnings;
        }
        return [];
    }

    getAST() {
        if (!this.active) {
            return null;
        }
        const data = this.compilation[this.active.path];
        if (!data) {
            return null;
        }
        return data.ast;
    }

    async compile(resource: IResource) {
        if (this.enabled) {
            Contracts.requireNonNull(resource, 'resource');
            if (!isPL(resource)) {
                return null;
            }
            this.active = resource;

            const data = this.compilation[resource.path] || {
                compiling: false
            };

            if (data.compiling) {
                return data.ast;
            }

            data.compiling = true;

            let response: any;
            try {
                this.task.emitTaskEvent(true, 'compilation');
                const params = new HttpParams({
                    encoder: new HttpParamEncoder()
                }).set('path', resource.path);
                response = await this.http.get('editor/compile', {
                    params: params, responseType: 'json'
                }).toPromise();

                data.compiling = false;
                this.task.emitTaskEvent(false);
                data.ast = response.ast;
                this.compilation[resource.path] = data;

                this._errors = [];
                this._warnings = [];

                Object.keys(this.compilation).forEach(k => {
                    const item = this.compilation[k];
                    if (item && item.ast) {
                        const errors = item.ast.__errors;
                        const warnings = item.ast.__warnings;

                        this._errors = [...this._errors, ...errors];
                        this._warnings = [...this._warnings, ...warnings];
                    }
                });

                this._warnings.forEach(w => w.isWarning = true);
                this._errors.forEach(w => w.isError = true);

                this._problems = [...this._errors, ...this._warnings];
                this._problemsCount = this._problems.length;
                this._warningsCount = this._warnings.length;
                this._errorsCount = this._errors.length;

                this.compiled.next();
            } catch (error) {
                data.compiling = false;
                this.task.emitTaskEvent(false);
                throw error;
            }
        } else {
            this._problems = [];
            this._warnings = [];
            this._errors = [];
            this._errorsCount = 0;
            this._warningsCount = 0;
            this._problemsCount = 0;
            this.compiled.next();
        }
    }

}
