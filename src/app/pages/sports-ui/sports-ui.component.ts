import { Component, OnInit } from '@angular/core';
import { Sports } from '../../providers/sports';
import { Sport } from '../../models';

@Component({
  selector: 'app-sports-ui',
  templateUrl: './sports-ui.component.html',
  styleUrls: ['./sports-ui.component.scss']
})
export class SportsUiComponent implements OnInit {

  loading: boolean = false;
  sportsRecords: Sport[] = [];
  constructor(private sports: Sports 
    ){}

  ngOnInit(): void {
    this.getTodoRecords()
  }

  getTodoRecords(): void{
    this.loading = true;
    this.sports.retrieveSportRecords("Canada").subscribe({
      next: (res: any) => {
        this.loading = false;
        this.sportsRecords =res.football;
        console.log("response", res)
      },
      error: (err: any) => {
        this.loading = false;
        console.log('err')
      }
    })


  }
    

}


