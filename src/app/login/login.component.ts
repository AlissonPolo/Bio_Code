import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
    // Define los controles de forma explícita
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Método para manejar el envío del formulario
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      console.log('Inicio de sesión exitoso:', email, password);
      
      // Simular redirección al dashboard (aquí podrías validar credenciales reales)
      this.router.navigate(['/dashboard']);
    } else {
      console.error('El formulario tiene errores');
    }
  }

  // Getter para obtener controles con tipado fuerte
  get f(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }
}
