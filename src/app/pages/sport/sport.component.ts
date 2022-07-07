import { Component, OnInit, Input } from '@angular/core';
import { Sport } from 'src/app/models';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {
  @Input() sport!: Sport;

  constructor() { }

  ngOnInit(): void {
  }

}
