import { Pipe, PipeTransform } from '@angular/core';
import { HttpService } from '../services/http.service';

@Pipe({name: 'assetData'})
export class AssetDataPipe implements PipeTransform {

    constructor(private readonly http: HttpService) {}

    transform(path: string): Promise<string> {
        return this.http.asset(path);
    }
}
