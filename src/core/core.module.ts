import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HttpClientModule } from "@angular/common/http";
import { PrimeNgModule } from "./prime-ng/prime-ng.module";
import { PipesModule } from "./pipes/pipes.module";
import { DirectivesModule } from "./directives/directives.module";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

const modules = [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    PrimeNgModule,
    PipesModule,
    DirectivesModule
]

@NgModule({
    imports: modules,
    exports: modules,
})
export class CoreModule { }
