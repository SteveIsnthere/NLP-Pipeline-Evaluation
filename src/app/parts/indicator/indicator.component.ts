import {Component, Input} from '@angular/core';
import {MatProgressSpinner} from "@angular/material/progress-spinner";
import {MatProgressBar} from "@angular/material/progress-bar";

@Component({
  selector: 'app-indicator',
  standalone: true,
  imports: [
    MatProgressSpinner,
    MatProgressBar
  ],
  templateUrl: './indicator.component.html',
  styleUrl: './indicator.component.css'
})
export class IndicatorComponent {
  @Input() name: string = '';
  @Input() value: number = 0;
  @Input() color: string = 'warn';
  protected readonly Math = Math;
}
