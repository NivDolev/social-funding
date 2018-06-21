import { HighlightsService } from '../services/highlights.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-highlights',
  templateUrl: './highlights.component.html',
  styleUrls: ['./highlights.component.css']
})

export class HighlightsComponent implements OnInit {
  public info = {
    totalBeckers: 0,
    fundedProjects: 0,
    liveProjects: 0,
  };
  today: Date;

  constructor(private highlightSerivce: HighlightsService) { }

  ngOnInit() {
    this.today = new Date();
    this.info = this.highlightSerivce.getInfo();
  }

}
