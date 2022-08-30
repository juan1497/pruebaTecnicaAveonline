import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder,Validators} from '@angular/forms'
import {Choice} from '../../../../../shared/models/choice'
import { ChoicesService } from 'src/shared/services/choices.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { Older } from 'src/shared/validators/mayorEdad.validator';
@Component({
  selector: 'app-form-content',
  templateUrl: './form-content.component.html',
  styleUrls: ['./form-content.component.scss']
})
export class FormContentComponent implements OnInit {
  /** 
   * VoteForm encargada de guardar los datos del formulario .
   * @type {FormGroup}
   */
  voteForm: FormGroup;
  /** 
   * Candidates se encarga de guardar los nombres de lo candidatos presidenciales .
   * @type {string[]} 
   */
  candidates:string[];
  /** 
   * Single se encarga de guardar los datos ya filtrados que seran graficados .
   * @type {any[]}
   */
  single!:any[];
  /** 
   * Data se encarga de obtener los datos del servicio .
   * @type {any[]}
   */
  data!:any[];
  /** 
   * View dimensiones de la grafica [ancho,alto].
   * @type {[number,number]}
   */
  view: [number,number] = [300, 300];
  /** 
   * showXAxis mostrar u ocultar  el eje X.
   * @type {Boolean}
   */
  showXAxis = true;
  /** 
   * showYAxis mostrar u ocultar la etiqueta del eje Y.
   * @type {Boolean}
   */
  showYAxis = true;
/** 
   * ColorScheme se encarga de guardar los colores de la grafica.
   * @type {Color}
   */
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#e3170a', '#6847fc', '#02ff00'],
  };
  
  constructor(private formBuilder:FormBuilder,private choicesService:ChoicesService) {
    this.candidates=this.choicesService.getCandidates();
    this.voteForm=this.formBuilder.group(
      {
      name:['',[Validators.required,Validators.maxLength(30)]],
      age:['',[Validators.required]],
      candidate:['',[Validators.required]]
      },{validator:Older('age')}
        
    )
   }

  ngOnInit(): void {}
  /** 
   * OnSubmit verifica que el formulario cumple con las validaciones y obtiene el valor de cada campo ,
   * despues llama al servicio que se encargada de guardar los datos en el front-end y subir los datos al grafico.
   */
  onSubmit() {
    if(this.voteForm.valid){
        const choice:Choice={
        name:this.voteForm.get("name")!.value,
        age:this.voteForm.get("age")!.value,
        candidate:this.voteForm.get("candidate")!.value
      }
      this.choicesService.pushChoice(choice)
      this.onLoadData()
      this.voteForm.reset();
    }else{
      alert("algo ha fallado")
    }
  }
  /** 
   * OnLoadData se encarga de consumir el servicio ChoiceServices para obtener y pintar los datos en la grafica con sus condiciones
   */
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
