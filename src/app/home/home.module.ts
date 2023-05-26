import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page.component";
import { SharedModule } from "../../shared/shared.module";

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        HomePageComponent,
    ]
})
export class HomeModule { }
