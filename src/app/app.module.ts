import { APP_INITIALIZER, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ProfileService } from "../shared/root-services/profile.service";
import { Observable, take, tap } from "rxjs";
import { SharedModule } from "../shared/shared.module";

function initialize(profileService: ProfileService,): () => Observable<any> {
    return () => profileService.getProfile()
        .pipe(
            tap(profile => profileService.handleGetProfileResult(profile)),
            take(1)
        );
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        SharedModule,
    ],
    providers: [
        {
            provide: APP_INITIALIZER,
            useFactory: initialize,
            deps: [ProfileService],
            multi: true,
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
