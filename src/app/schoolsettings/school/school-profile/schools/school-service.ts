import { Injectable } from "@angular/core";
import {
  Http,
  Response,
  Headers,
  Jsonp,
  RequestOptions,
  URLSearchParams
} from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/do";
import "rxjs/add/operator/catch";
import { SchoolProfile } from '../../../../Models/Models';

@Injectable()
export class SchoolService  {
  constructor(private http: Http) { 
  }
 
  //create new school 
  createSchool(school) {
    console.log("the school Data sent is "+JSON.stringify(school));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(school);
    return this.http.post('http://localhost:8080/api/school/add', body, options ).map((res: Response) => res.json())
    .catch((error:Response)=>Observable.throw(error.json));
    
  }

  public getall(): Observable<SchoolProfile[]> {
    return this.executeRestForUrl("http://localhost:8080/api/school/all");
  }

  public executeRestForUrl(url: string): Observable<SchoolProfile[]> {
    console.log("getting data from url: " + url);
    var responseData =  this.http.get(url)
      .map((res: Response) => <SchoolProfile[]>res.json());
      return responseData;
  }
}