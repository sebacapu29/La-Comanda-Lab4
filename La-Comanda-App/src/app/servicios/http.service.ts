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
    return this.http.post(getUrl,pBody);
  }
  getRequestWithToken(token:string,urlParams:string):Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('token', JSON.parse(token));
    const getUrl = this.urlBase + urlParams;
    
    return this.http.get(getUrl, {headers:headers});
  }
}
