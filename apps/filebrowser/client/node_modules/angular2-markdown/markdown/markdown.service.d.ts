import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
export declare class MarkdownService {
    private _renderer;
    constructor();
    getContent(path: string): Promise<any>;
    readonly renderer: any;
    extractData(res: any): string;
    setMarkedOptions(options: any): void;
    compile(data: string): string;
    private handleError(error);
    private extendRenderer();
}
