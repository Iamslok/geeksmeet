import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {  
  ProgLang = [
    {name: 'HTML', code: 'HTML'},
    {name: 'CSS', code: 'CSS'},
    {name: 'JAVASCRIPT', code: 'JAVASCRIPT'},
    {name: 'TYPESCRIPT', code: 'TYPESCRIPT'},
    {name: 'C#', code: 'C#'}
];

  selectedProgLang!: string[];

  constructor() {
      
  }

  ngOnInit(): void {
  this.ProgLang = [
      {name: 'Html', code: 'HTML'},
      {name: 'CSS', code: 'CSS'},
      {name: 'Javascript', code: 'JAVASCRIPT'},
      {name: 'Typescript', code: 'TYPESCRIPT'},
      {name: 'C#', code: 'C#'}
  ];
  }

}
