import { Injectable } from "@angular/core";
import { BehaviorSubject, of } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { RouterService } from "./router.service";
import { URL_PATTERN } from "../consts/patterns";

const PROFILE = 'profile'
const SHORT_VALUE = 'Too short value, minimum 2 symbols'
const INVALID_URL = 'URL is not valid'
export const UPDATE_PROFILE_SUCCESS = {type: 'success', text: 'Profile is successfully updated'}
export const UPDATE_PROFILE_FAIL = {type: 'error', text: 'Profile is not updated'}

export interface UpdateProfileMessage {
    type: string,
    text: string,
}

@Injectable({
    providedIn: 'root'
})
export class ProfileService {
    profile$ = new BehaviorSubject<any>(null)
    updateProfileMessage$ = new BehaviorSubject<UpdateProfileMessage | null>(null)
    isProfilePage = false

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
        this.updateProfileMessage$.next(null)
        localStorage.removeItem(PROFILE)
        this.router.goToAuth()
    }

    updateProfile(data: any) {
        let errors = {} as any
        const names = ['firstName', 'lastName']
        names.forEach(name => {
            if (data[name].length === 1) errors[name] = SHORT_VALUE
        })
        if (data.website && !URL_PATTERN.test(data.website)) errors.website = INVALID_URL
        return of(Object.keys(errors).length ? errors : null)
    }
}
