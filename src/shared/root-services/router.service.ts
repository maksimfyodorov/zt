import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RouterService {
    constructor(private router: Router) { }

    goToApp() {
        this.goTo([""])
    }

    goToAuth() {
        this.goTo(["/auth"])
    }

    private goTo(commands: any) {
        this.router.navigate(commands)
    }
}
