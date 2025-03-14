import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  contactForm: FormGroup; // Formulario reactivo
  successMessageVisible: boolean = false; // Bandera para mensaje de éxito

  constructor(private fb: FormBuilder) {
    // Inicializar el formulario reactivo
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  /**
   * Método para manejar el envío del formulario.
   */
  onSubmit(): void {
    if (this.contactForm.valid) {
      this.successMessageVisible = true; // Mostrar mensaje de éxito
      this.contactForm.reset(); // Reiniciar el formulario

      // Ocultar el mensaje de éxito después de 5 segundos
      setTimeout(() => {
        this.successMessageVisible = false;
      }, 5000);
    }
  }
}
