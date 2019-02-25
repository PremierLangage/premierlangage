import { Injectable } from '@angular/core';
import { Resource } from '../../models/resource.model';

@Injectable({providedIn: 'root'})
export class CompilerService {
    readonly state: any = {};


    restoreState(resource: Resource) {
        if (resource.path in this.state) {
            return this.state[resource.path];
        }
        return undefined;
    }


    saveState(uri: monaco.Uri, state: any) {
        this.state[uri.path] = state;
    }
}
