import { AbstractControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {
 static passwordsMatching(control: AbstractControl): ValidationErrors | null {
    const Password = control.get('Password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;
    // Check if passwords are matching. If not then add the error 'passwordsNotMatching: true' to the form 
if ((Password === confirmPassword) && (Password !== null && confirmPassword !== null)) {
     return null;
     } 
     else{
         return { passwordsNotMatching: true };
     }
}
}

