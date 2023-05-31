import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { BillingPageComponent } from "./pages/billing-page.component";

const routes: Routes = [
    { path: '', component: BillingPageComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        BillingPageComponent
    ]
})
export class BillingModule { }
