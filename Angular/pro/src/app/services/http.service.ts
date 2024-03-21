import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  url = 'https://localhost:7242/api/View/Cars';

  getCars():Observable<any>{
    return this.http.get(this.url);
  }

  postCar(data:any):Observable<any>{
    return this.http.post('https://localhost:7242/api/View/car',data);
  }

  getCarById(id:any):Observable<any>{
    return this.http.get(`https://localhost:7242/api/View/Cars/id?id=${id}`,id);
  }

  //get associate data from JSON
  GetAssociate():Observable<any>{
    return this.http.get("assets/db.json");
    
  }
  

  GetAssociatebyid(id:any):Observable<any>{
    return this.http.get("http://localhost:4200/associate/id",id);
  }

  
}
