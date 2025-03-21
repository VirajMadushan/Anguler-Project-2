import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,  // You may or may not need this if you use it in a module
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css'],  // Make sure 'styleUrls' is plural
  encapsulation: ViewEncapsulation.None
})
export class ControlComponent {
  // Declare the label as an input property
  @Input() label: string = ''; // Use @Input() for the label property
}
