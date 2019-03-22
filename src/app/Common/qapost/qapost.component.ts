import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-qapost',
  templateUrl: './qapost.component.html',
  styleUrls: ['./qapost.component.css']
})
export class QapostComponent implements OnInit {

  @Input()  Question;
  @Input()  Answered;
  constructor() {}
  public Ques;
  public Ansred;
  ngOnInit() {
    this.Ques = this.Question;
    this.Ansred = this.Answered;
  }
  ChosenOption(option, questionid) {

  }
  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges(newchange: SimpleChanges) {
    const Q = newchange['Question'];
    const A = newchange['Answer'];
    this.Ques = Q.currentValue;
  }

}
