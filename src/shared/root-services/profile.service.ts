import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, interval, map, of, take, tap } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { RouterService } from "./router.service";

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    profile$ = new BehaviorSubject<any>(null)

    constructor(
        private http: HttpClient,
        private router: RouterService,
    ) {}

    getProfile() {
        // return this.http
        //     .get('https://jsonplaceholder.typicode.com/users')
        //     .pipe(
        //         map((users) => (users as any[])[0]),
        //         delay(1000)
        //     )

        const profile = JSON.parse(localStorage.getItem('profile') || '{}')
        return of(Object.keys(profile).length ? profile : null);
    }

    handleGetProfileResult(profile: any) {
        if (profile) {
            this.profile$.next(profile)
            this.router.goToApp()
        } else {
            this.router.goToAuth()
        }
    }
}
