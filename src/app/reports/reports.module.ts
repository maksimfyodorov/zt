import { NgModule } from "@angular/core";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";
import { ReportsPageComponent } from "./pages/reports-page.component";

const routes: Routes = [
    { path: '', component: ReportsPageComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        ReportsPageComponent,
    ],
})
export class ReportsModule { }
