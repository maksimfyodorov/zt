import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from "./auth.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
    { path: '', component: AuthComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
      AuthComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
})
export class AuthModule { }
