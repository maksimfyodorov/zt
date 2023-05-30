import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { RouterService } from "./router.service";

const PROFILE = 'profile'

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
        const profile = JSON.parse(localStorage.getItem(PROFILE) || '{}')
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
        !withoutLocalStorage && localStorage.setItem(PROFILE, JSON.stringify(profile))
    }

    destroyProfile() {
        this.profile$.next(null)
        localStorage.removeItem(PROFILE)
        this.router.goToAuth()
    }
}
