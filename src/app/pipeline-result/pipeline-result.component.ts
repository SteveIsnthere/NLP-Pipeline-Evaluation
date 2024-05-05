import {Component, Input} from '@angular/core';
import {PipelineResult} from "../app.component";
import {MatExpansionPanel, MatExpansionPanelDescription, MatExpansionPanelTitle, MatExpansionPanelHeader} from "@angular/material/expansion";
import {MatProgressBar} from "@angular/material/progress-bar";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-pipeline-result',
  standalone: true,
  imports: [
    MatExpansionPanel,
    MatExpansionPanelTitle,
    MatExpansionPanelDescription,
    MatExpansionPanelHeader,
    MatProgressBar,
    MatDivider
  ],
  templateUrl: './pipeline-result.component.html',
  styleUrl: './pipeline-result.component.css'
})
export class PipelineResultComponent {
  @Input() pipelineResult!: PipelineResult;
}
