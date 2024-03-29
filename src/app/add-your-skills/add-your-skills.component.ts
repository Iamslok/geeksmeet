import { Component, OnInit } from '@angular/core';
import { userProfile } from 'src/assets/models/userprofile';
import { ApiService } from '../api.service';

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
  userprofile:userProfile = new userProfile();

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
  }

  create(){
    this.userprofile.languages = this.selectedProgLang;
    this.service.postUserProfile(this.userprofile).subscribe(res=>{
      console.log(res);
    })
  }

}
