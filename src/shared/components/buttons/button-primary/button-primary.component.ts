import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.less']
})
export class ButtonPrimaryComponent {
    @Input() label = 'Click me'
    @Output() clicked = new EventEmitter<boolean>()
}
