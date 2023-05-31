import { Component, Input, OnInit } from "@angular/core";
import { ControlDataModel } from "../models/control-data.model";
import { AbstractControl } from "@angular/forms";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.less']
})
export class InputTextComponent implements OnInit {
    @Input() controlData!: ControlDataModel;
    isRequired = false

    ngOnInit() {
        const validators = this.controlData.control.validator?.({} as AbstractControl)
        this.isRequired = validators?.['required']
    }
}
