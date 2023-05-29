import { Component, Input } from "@angular/core";
import { ControlDataModel } from "../models/control-data.model";

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.less']
})
export class InputTextComponent {
    @Input() controlData!: ControlDataModel;
}
