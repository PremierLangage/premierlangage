import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NavigationService {

    readonly debugging: Subject<any> = new Subject();
    readonly settings: Subject<any> = new Subject();


}
