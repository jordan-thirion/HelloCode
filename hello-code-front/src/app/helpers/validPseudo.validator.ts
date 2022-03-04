import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function validPseudo(controlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        switch(control.value){
            case "admin": 
            control.setErrors(null);
            break;
            case "test":
            control.setErrors(null);
            break; 
            default:
            control.setErrors({validPseudo: true});
        }
    }
}