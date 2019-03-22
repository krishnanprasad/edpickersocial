import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-header',
  templateUrl: './post-header.component.html',
  styleUrls: ['./post-header.component.css']
})
export class PostHeaderComponent implements OnInit {

 
  public Username;
  public CommunityFrom;
  public UserImage;
  @Input('Name') dataName;
  @Input('CommunityFrom') dataCommunityFrom;
  @Input('Image') dataUserImage;


  constructor() { }

  ngOnInit() {
    this.Username = this.dataName;
    this.CommunityFrom = this.dataCommunityFrom;
    this.UserImage = this.dataUserImage;

  }

}
