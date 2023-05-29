import { FormControl } from "@angular/forms";

export interface ControlDataModel {
    control: FormControl,
    type: string | boolean,
    id: string,
    label: string,
}
