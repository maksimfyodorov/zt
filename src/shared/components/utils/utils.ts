import { FormControl } from "@angular/forms";
import { ControlDataModel } from "../inputs/models/control-data.model";

export function getControlData(
    control: FormControl,
    id: string,
    label: string,
    type?: string,
) {
    return {
        control,
        id,
        label,
        type,
    } as ControlDataModel
}
