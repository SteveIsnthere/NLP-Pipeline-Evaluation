import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import * as jsonData from '../assets/question_sets.json';
import {QuestionSetComponent} from "./question-set/question-set.component";
import {MatButton} from "@angular/material/button";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";

export interface Score {
  coverage: number;
  overlap: number;
  more_info: number;
  nlp_similarity: number;
  bleu_geo_mean: number;
  bleu: number[];
  rouge: number;
  meteor: number;
}

export interface PipelineResult {
  name: string;
  feedback: string;
  feedback_answer: string;
  cleaned_final_answer: string;
  score: Score;
}

export interface QuestionSet {
  id: number;
  relation: string;
  question: string;
  answer: string;
  perfect_answer: string;
  cleaned_answer: string;
  cleaned_perfect_answer: string;
  coverage: number;
  pipelines: PipelineResult[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, QuestionSetComponent, MatButton, MatMenuTrigger, MatMenu, MatMenuItem],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'NLP-Pipeline-Evaluation';
  data: QuestionSet[] = (jsonData as any).default;
  dataToDisplay: QuestionSet[] = this.data.slice(0, 4);
  allDataDisplayed = false;

  loadMore() {
    this.dataToDisplay = this.data;
    this.allDataDisplayed = true;
  }

  sortByID() {
    this.loadMore();
    this.dataToDisplay.sort((a, b) => a.id - b.id);
  }

  sortByCoverage() {
    this.loadMore();
    this.dataToDisplay.sort((a, b) => b.coverage - a.coverage);
  }

  sortByPipelinePerformance() {
    this.loadMore();
    this.dataToDisplay.sort((a, b) => {
      let aScore = a.pipelines[0].score.more_info;
      let sum = 0;
      for (let pipeline of a.pipelines.slice(1, a.pipelines.length)) {
        sum += pipeline.score.more_info;
      }
      aScore -= sum / (a.pipelines.length - 1);

      let bScore = b.pipelines[0].score.more_info;
      sum = 0;
      for (let pipeline of b.pipelines.slice(1, b.pipelines.length)) {
        sum += pipeline.score.more_info;
      }
      bScore -= sum / (b.pipelines.length - 1);

      return aScore - bScore;
    });
  }
}
