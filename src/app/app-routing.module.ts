import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "../shared/guards/auth.guard";
import { NotAuthorizedGuard } from "../shared/guards/not-authorized.guard";

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'auth', canActivate: [NotAuthorizedGuard], loadChildren: () => import('auth/auth.module').then(m => m.AuthModule) },
    { path: 'home', canActivate: [AuthGuard], loadChildren: () => import('app/home/home.module').then(m => m.HomeModule) },
    { path: 'inventory', canActivate: [AuthGuard], loadChildren: () => import('app/inventory/inventory.module').then(m => m.InventoryModule) },
    { path: 'reports', canActivate: [AuthGuard], loadChildren: () => import('app/reports/reports.module').then(m => m.ReportsModule) },
    { path: 'billing', canActivate: [AuthGuard], loadChildren: () => import('app/billing/billing.module').then(m => m.BillingModule) },
    { path: 'profile', canActivate: [AuthGuard], loadChildren: () => import('app/profile/profile.module').then(m => m.ProfileModule) },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
