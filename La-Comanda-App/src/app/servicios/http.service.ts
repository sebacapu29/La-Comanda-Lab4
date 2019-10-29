import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
// import { Content } from '@angular/compiler/src/render3/r3_ast';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  // public urlBase:string = "https://cors-anywhere.herokuapp.com/"+"http://sebacapurrolacomanda.000webhostapp.com"; //LOCAL
  public urlBase:string = "https://cors-anywhere.herokuapp.com/"+"https://sebacapurrolacomanda.000webhostapp.com"; // DEPLOYADA

  constructor(private http:HttpClient) { }

  getRequest(urlParams:string):Observable<any>{
    const getUrl = this.urlBase + urlParams;
    return this.http.get(getUrl);
  }
  postRequest(urlParams:string, pBody:any):Observable<any>{
    const getUrl = this.urlBase + urlParams;
    console.log(pBody);
    const bodyJson= JSON.stringify(pBody);
    // const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
    // headers.append("Access-Control-Allow-Origin", "*");
    return this.http.post(getUrl,pBody);
  }
}
