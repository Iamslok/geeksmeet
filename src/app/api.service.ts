import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { userProfile } from 'src/assets/models/userprofile';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  private url = 'http://localhost:8000/'

  getDevProfiles(){
  return this.http.get(this.url + 'userprofile/getAllUsers');
  }

  postUserProfile(userProfile:userProfile){
    return this.http.post(this.url + 'userprofile/createUser',userProfile);
  }

}
