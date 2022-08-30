import { FormGroup } from '@angular/forms';

export function Older(controlName: string){
    return (formGroup: FormGroup) => {
        const age = formGroup.controls[controlName];
        if (age.errors ) {
            return;
          }
        if (age.value>=18){
            age.setErrors(null)
        }else{
           age.setErrors({ Older: true })
        }
    };
}