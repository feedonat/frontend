import { Injectable } from '@angular/core'
import { Resolve } from '@angular/router'
import { SchoolService } from './school-service'

@Injectable()
export class SchoolResolver implements Resolve<any> {
  constructor(private schoolservice:SchoolService) {

  }

  resolve() {
    return this.schoolservice.getall().map(schools => schools)
  }
}