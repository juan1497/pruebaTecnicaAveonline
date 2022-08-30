import { Component, OnInit } from '@angular/core';
import { Choice } from 'src/shared/models/choice';
import { ChoicesService } from 'src/shared/services/choices.service';

@Component({
  selector: 'app-table-content',
  templateUrl: './table-content.component.html',
  styleUrls: ['./table-content.component.scss']
})
export class TableContentComponent implements OnInit {
  candidates!:string[];
  choices!:Choice[]
  constructor(choicesService:ChoicesService) { 
    this.choices=choicesService.getChoices();
    this.candidates=choicesService.getCandidates();
    
  }

  ngOnInit(): void {
  }
  

}
