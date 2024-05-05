import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as jsonData from '../assets/question_sets.json';
import {QuestionSetComponent} from "./question-set/question-set.component";

export interface PipelineResult {
  name: string;
  feedback: string;
  feedback_answer: string;
  bleu_geo_mean: number;
  bleu: number[];
  rouge: number;
  meteor: number;
  score: number;
}

export interface QuestionSet {
  id: number;
  relation: string;
  question: string;
  answer: string;
  perfect_answer: string;
  pipelines: PipelineResult[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionSetComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NLP-Pipeline-Evaluation';
  data: QuestionSet[] = (jsonData as any).default;
}
