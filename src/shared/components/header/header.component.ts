import { Component } from "@angular/core";
import { ProfileService } from "../../root-services/profile.service";
import { AuthService } from "../../root-services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
    profile$ = this.profileService.profile$

    constructor(
        private profileService: ProfileService,
        private authService: AuthService
    ) {}

    logout() {
        this.authService.logout()
    }
}
