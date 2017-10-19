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
import { SchoolProfile } from '../Models/Models';

@Injectable()
export class SchoolProfileService {
  constructor(private http: Http) { }

  //create new school 
  createSchool(school) {
    console.log("the school Data sent is "+JSON.stringify(school));
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(school);
    return this.http.post('http://localhost:8080/api/school/add', body, options ).map((res: Response) => res.json())
    .catch((error:Response)=>Observable.throw(error.json));
    
  }

getSchools() : Observable<SchoolProfile[]> { {
    console.log("calling getschools service ");
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get('http://localhost:8080/api/school/all').map((res: Response) => res.json())
    .catch((error:Response)=>Observable.throw(error.json));
    
    
  }
}

}
