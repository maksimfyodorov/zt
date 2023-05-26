import { NgModule } from '@angular/core';
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";

const modules = [
    ButtonModule,
    InputTextModule,
]

@NgModule({
  declarations: [],
  imports: modules,
  exports: modules,
})
export class PrimeNgModule { }
