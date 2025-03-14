import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  mensaje: string = '';
  mensajeClase: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  cerrarSesion(): void {
    // Simulamos el cierre de sesión (puedes agregar lógica real aquí)
    const exito = true;  // Cambia esto a `false` para simular un error.

    if (exito) {
      this.mensaje = 'Sesión cerrada con éxito';
      this.mensajeClase = 'success'; // Estilo de éxito
    } else {
      this.mensaje = 'Hubo un error al cerrar sesión';
      this.mensajeClase = 'error'; // Estilo de error
    }
  }
}
