import { Injectable } from '@angular/core';
import {Choice} from '../models/choice'
@Injectable()
export class ChoicesService {
  choices:Choice[]=[];
  candidates:string[]=['Fico','Petro','Rodolfo']
  constructor() {}
  /**
   * Funcion retorna los datos o registros de los posibles votos
   * @returns {Choice[]} choices
   */
  getChoices(){
    return this.choices;
  }
  /**
   * Agrega un registro del voto.
   * @param choice @type {Choice}
   */
  pushChoice(choice:Choice) {
    this.choices.push(choice);
  }
  /**
   * funcion retonar los candidatos presidenciales
   * @returns {string[]} candidatos
   */
  getCandidates(){
    return this.candidates;
  }
}
