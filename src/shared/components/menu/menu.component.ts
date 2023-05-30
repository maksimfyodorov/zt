import { Component } from "@angular/core";
import { NAV_LINKS, NavLink } from "./consts";
import { ProfileService } from "../../root-services/profile.service";

@Component({
  selector: "app-menu",
  templateUrl: "./menu.component.html",
  styleUrls: ["./menu.component.less"],
})
export class MenuComponent {
    navLinks: NavLink[] = NAV_LINKS;
    profile$ = this.profileService.profile$

    constructor(private profileService: ProfileService) {}
}
