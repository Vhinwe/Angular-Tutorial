import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string ='Angular-project1';
  description: string = 'Angular class taking place @pmt';
  isClassEnded: boolean = false;
  numberOfStudents: number = 7;
  School: string = 'PMT Academy';
  isSchoolOn: boolean = false;
  classPrefect: string = 'Nicholas' 
  userName: string = '';
  showMenu: boolean = false;
  dishes: string[] = ['Beans and Yam', 
  'Draw soup',
  'Abacha',
  'Nsala soup',
  'Bread and coconut',
  'Fio fio and yam',
  'Fried potates and Plantain',
  'Noodles'];

  
  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }
}

