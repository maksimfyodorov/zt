import { Component } from "@angular/core";
import { ProfileService, UpdateProfileMessage } from "../../root-services/profile.service";
import { AuthService } from "../../root-services/auth.service";
import { tap } from "rxjs";
import { ProfileModel } from "../../../app/profile/models/profile.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
    profile$ = this.profileService.profile$.pipe(tap(res => this.handleGettingProfile(res)))
    profile!: ProfileModel
    updateProfileMessage$ = this.profileService.updateProfileMessage$.pipe(tap(res => this.handleGettingMessage(res)))
    updateProfileMessage!: UpdateProfileMessage | null
    firstName = ''
    lastName = ''

    constructor(
        public profileService: ProfileService,
        private authService: AuthService
    ) {}

    deleteMessage() {
        this.profileService.updateProfileMessage$.next(null)
    }

    logout() {
        this.authService.logout()
    }

    private handleGettingProfile(profile: any | null) {
        if (profile) {
            this.profile = profile
            const [first, last] = profile.name.split(" ")
            this.firstName = first
            this.lastName = last
        }
    }

    private handleGettingMessage(message: UpdateProfileMessage | null) {
        this.updateProfileMessage = message
        if (message?.type === 'success') {
            setTimeout(() => this.profileService.updateProfileMessage$.next(null), 1000 * 30)
        }
    }
}
