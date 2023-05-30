import { Component, OnDestroy, OnInit } from "@angular/core";
import { ProfileService } from "../../../shared/root-services/profile.service";

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.less']
})
export class ProfilePageComponent implements OnInit, OnDestroy {
    constructor(
      private profileService: ProfileService,
    ) { }

    ngOnInit() {
      this.profileService.isProfilePage = true
    }

    ngOnDestroy() {
        this.profileService.isProfilePage = false
    }
}
