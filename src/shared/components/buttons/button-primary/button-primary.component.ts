import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.less']
})
export class ButtonPrimaryComponent {
    @Input() label = 'Click me'
    @Input() disabled = false
    @Input() loading = false
    @Output() clicked = new EventEmitter<boolean>()
}
