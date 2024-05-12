import {Component, Input} from '@angular/core';
import {QuestionSet} from "../app.component";
import {PipelineResultComponent} from "../pipeline-result/pipeline-result.component";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitleGroup, MatCardTitle, MatCardSubtitle} from "@angular/material/card";
import {MatAccordion} from "@angular/material/expansion";
import {MatDivider} from "@angular/material/divider";

@Component({
  selector: 'app-question-set',
  standalone: true,
  imports: [
    PipelineResultComponent,
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardContent,
    MatCardTitle,
    MatCardSubtitle,
    MatAccordion,
    MatDivider
  ],
  templateUrl: './question-set.component.html',
  styleUrl: './question-set.component.css'
})
export class QuestionSetComponent {
  @Input() questionSet!: QuestionSet;
  protected readonly Math = Math;
}
