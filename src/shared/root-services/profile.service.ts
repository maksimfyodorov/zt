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
        const profile = JSON.parse(localStorage.getItem('profile') || '{}')
        return of(Object.keys(profile).length ? profile : null);
    }

    handleGetProfileResult(profile: any) {
        if (profile) {
            this.setProfile(profile, true)
            this.router.goToApp()
        } else {
            this.router.goToAuth()
        }
    }

    setProfile(profile: any, withoutLocalStorage?: boolean) {
        this.profile$.next(profile)
        !withoutLocalStorage && localStorage.setItem('profile', JSON.stringify(profile))
    }
}
