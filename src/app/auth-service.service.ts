import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
   register(data:any):Observable<any>{
     console.log("I am Working")
     return this.http.post('localhost:8080/postOrder',data)

  }
}
