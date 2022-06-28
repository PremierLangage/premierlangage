import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {

    private user: any;

    get admin(): boolean {
        return this.user && this.user.is_superuser;
    }

    constructor(private readonly http: HttpClient) {}

    async check() {
        try {
            const response = await this.http.get<any>('/profile/auth/', {
                responseType: 'json'
            }).toPromise();
            this.user = response.authenticated ? response.user : null;
        } catch {}
    }

}
