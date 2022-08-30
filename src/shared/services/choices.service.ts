import { Injectable } from '@angular/core';
import {Choice} from '../models/choice'
@Injectable()
export class ChoicesService {
  choices:Choice[]=[];
  candidates:string[]=['Fico','Petro','Rodolfo']
  constructor() {}
  getChoices(){
    return this.choices;
  }
  pushChoice(choice:Choice) {
    this.choices.push(choice);
  }
  getCandidates(){
    return this.candidates;
  }
}
