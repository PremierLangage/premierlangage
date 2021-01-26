import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class HttpService {

    private readonly cache: { [k: string]: string } = {};

    constructor(private readonly http: HttpClient) {}

    async asset(path: string): Promise<string> {
        path = this.resolveAsset(path);

        if (path in this.cache) {
            return this.cache[path];
        }
        const content = await this.http.get(path, { responseType: 'text' }).toPromise();
        this.cache[path] = content;
        return content;
    }

    async preview(content: string) {
        const data = {
            'name': 'preview_pl',
            'content': content
        };

        const headers = new HttpHeaders().set('Content-Type', 'application/json;charset=UTF-8');
        const response: any = await this.http.post('filebrowser/option', data, {
            headers: headers
        }).toPromise();
        return response.preview;
    }

    async loadExternalStyles(styleUrl: string) {
        return new Promise((resolve) => {
            const styleElement = document.createElement('link');
            styleElement.href = this.resolveBundle(styleUrl);
            styleElement.onload = resolve;
            document.head.appendChild(styleElement);
        });
    }

    async loadExternalScripts(scriptUrl: string) {
        return new Promise(resolve => {
            const scriptElement = document.createElement('script');
            scriptElement.src = this.resolveBundle(scriptUrl);
            scriptElement.onload = resolve;
            document.body.appendChild(scriptElement);
        });
    }

    private resolveAsset(path: string) {
        const assets = environment.assets;
        path = assets + '/' + path;
        if (path.startsWith('https://cdn.staticaly.com')) {
            path += '?env=dev';
        }
        return path;
    }

    private resolveBundle(path: string) {
        const baseUrl = environment.baseUrl;
        path = baseUrl + '/' + path;
        if (path.startsWith('https://cdn.staticaly.com')) {
            path += '?env=dev';
        }
        return path;
    }

}
