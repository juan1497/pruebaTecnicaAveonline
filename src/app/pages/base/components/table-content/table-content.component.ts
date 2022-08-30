import { Component, OnInit } from '@angular/core';
import { Choice } from 'src/shared/models/choice';
import { ChoicesService } from 'src/shared/services/choices.service';

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss']
})
export class TableContentComponent implements OnInit {
  /** 
   * Candidates guarda los candidatos
   * @type {string[]}
   */
  candidates!:string[];
  /** 
   * Choices guarda los datos o registros de los posibles votos 
   * @type {Choice[]}
   */
  choices!:Choice[]
  /** 
   * @constructor obtener los datos 
   * @param choicesService @type {ChoiceService}
   */
  constructor(choicesService:ChoicesService) { 
    this.choices=choicesService.getChoices();
    this.candidates=choicesService.getCandidates();
    
  }
  ngOnInit(): void {}
}
