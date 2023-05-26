import { Component } from '@angular/core';
import { HomePageService } from "../services/home-page.service";

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    providers: [HomePageService]
})
export class HomePageComponent {
}
