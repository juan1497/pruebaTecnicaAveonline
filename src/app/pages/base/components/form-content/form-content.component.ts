import { Component, OnInit } from '@angular/core';
import {UntypedFormGroup,UntypedFormBuilder,Validators} from '@angular/forms'
import {Choice} from '../../../../../shared/models/choice'
import { ChoicesService } from 'src/shared/services/choices.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.scss']
})
export class FormContentComponent implements OnInit {
  voteForm!: UntypedFormGroup;
  submitForm: boolean = false;
  candidates:Array<string>=['Fico','Petro','Rodolfo'] 
  //grafica
  single!:any[];
  multi!: any[];
  data!:any[];
  view: [number,number] = [300, 300];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = true;
  yAxisLabel = '';

  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#e3170a', '#6847fc', '#02ff00'],
  };

  constructor(private formBuilder:UntypedFormBuilder,private choicesService:ChoicesService) {
    this.voteForm=this.formBuilder.group({
      name:['',[Validators.required,Validators.maxLength(30)]],
       age:['',[Validators.required]],
      candidate:['',[Validators.required]]
    })
   }

  ngOnInit(): void {}

  onSubmit() {
    if(this.voteForm.valid){
        const choice:Choice={
        name:this.voteForm.get("name")!.value,
        age:this.voteForm.get("age")!.value,
        candidate:this.voteForm.get("candidate")!.value
      }
      // enviar datos
      this.choicesService.pushChoice(choice)
      this.onLoadData()
      this.voteForm.reset();
    }else{
      alert("algo ha fallado")
    }
  }
  onLoadData() {
    this.data=this.choicesService.getChoices();
    this.single=[
      {
        "name":"18-29",
        "value":this.data.filter(c=>(c.age>=18&&c.age<=29)).length
      },
      {
        "name":"30-50",
        "value":this.data.filter(c=>(c.age>=30&&c.age<=50)).length
      },
      {
        "name":"<50",
        "value":this.data.filter(c=>c.age>50).length
      }
    ]

  }
  onSelect(event:any) {
    console.log(event);
  }

}
