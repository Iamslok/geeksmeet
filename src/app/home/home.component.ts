import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
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
  data: any;

  constructor(private service:ApiService) {
      
  }

  ngOnInit(): void {
  this.ProgLang = [
      {name: 'Html', code: 'HTML'},
      {name: 'CSS', code: 'CSS'},
      {name: 'Javascript', code: 'JAVASCRIPT'},
      {name: 'Typescript', code: 'TYPESCRIPT'},
      {name: 'C#', code: 'C#'}
  ];

  this.service.getDevProfiles().subscribe((res)=>{
    this.data = res;
    console.log(this.data);
  })
  }
}
