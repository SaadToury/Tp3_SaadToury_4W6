import { Component } from '@angular/core';
import { Score } from '../models/score';
import { MaterialModule } from '../material.module';
import { CommonModule } from '@angular/common';
import { Round00Pipe } from '../pipes/round-00.pipe';
import { HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
const domain = "http://localhost:5266/api/Scores/"

@Component({
  selector: 'app-score',
  standalone: true,
  imports: [MaterialModule, CommonModule, Round00Pipe],
  templateUrl: './score.component.html',
  styleUrl: './score.component.css'
})
export class ScoreComponent {

  myScores : Score[] = [];
  publicScores : Score[] = [];
  userIsConnected : boolean = false;

  constructor(public route : Router, public http : HttpClient) { }

  async ngOnInit() {

    this.userIsConnected = sessionStorage.getItem("token") != null;
    this.getScore();
    this.postScore();
  }

  async changeScoreVisibility(score : Score){


  }
  async getScore() : Promise<void>{
    let token = localStorage.getItem("token");
    let httpOptions = {
      headers : new HttpHeaders({
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer' + token
      })
    };
    let x = await lastValueFrom(this.http.get<Score[]>(domain + "GetScore", httpOptions));
    console.log(x);
    this.myScores = x;
  }
  async postScore() : Promise<void>{
    let token = localStorage.getItem("token");
    let httpOptions = {
      headers : new HttpHeaders ({
        'Content-Type' : 'application/json',
        'Authorization' : 'Bearer' + token
      })
    };
    let newScore = new Score(0, null, null, "", 0, true);
    let x = await lastValueFrom(this.http.post(domain + "PutScore", newScore, httpOptions));
  }
}
