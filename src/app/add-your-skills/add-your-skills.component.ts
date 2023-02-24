import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-your-skills',
  templateUrl: './add-your-skills.component.html',
  styleUrls: ['./add-your-skills.component.css']
})
export class AddYourSkillsComponent implements OnInit {
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
