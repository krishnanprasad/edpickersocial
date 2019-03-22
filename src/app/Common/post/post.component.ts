import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  public CardList;
  @Input() data;
  constructor() { }

  ngOnInit() {
    this.CardList = this.data;
  }
  onClick() {
    alert('Hi');
  }
  alertvalue(Value) {
    alert('option Selected' + Value);
  }
  getType(Type) {
    switch (Type) {
      case 'Offering':
        return '#00ad5d';
      case 'Request':
        return '#f5004f';
      case 'Activity':
        return '#b69001';
    }
  }
}
