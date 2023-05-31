import { NgModule } from "@angular/core";
import { InventoryPageComponent } from "./pages/inventory-page.component";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', component: InventoryPageComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes),
    ],
    declarations: [
        InventoryPageComponent
    ],
})
export class InventoryModule { }
