import { Component } from '@angular/core';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.css']
})
export class ListasComponent {
  programas = [
    {
      nombre: 'Programa 1',
      usuarios: [
        { 
          id: '1', nombre: 'Juan Pérez', fecha: '2024-11-30', email: 'juan@example.com', 
          telefono: '123456789', ficha: 'A001', descripcion: '', mostrarOpciones: false, archivo: null 
        },
        { 
          id: '2', nombre: 'Ana Gómez', fecha: '2024-11-30', email: 'ana@example.com', 
          telefono: '987654321', ficha: 'A002', descripcion: '', mostrarOpciones: false, archivo: null 
        }
      ]
    }
  
  ];
  contadores = {
    asistidos: 0,
    noAsistidos: 0
  };

  // Función para mostrar u ocultar las opciones de novedad
  mostrarOpciones(usuario: any): void {
    usuario.mostrarOpciones = !usuario.mostrarOpciones;
  }

  // Función para manejar los cambios de asistencia (asistió/no asistió)
  marcarAsistencia(usuario: any, tipo: string): void {
    if (tipo === 'asistido') {
      this.contadores.asistidos++;
      this.contadores.noAsistidos = Math.max(0, this.contadores.noAsistidos - 1); 
    } else if (tipo === 'noAsistido') {
      this.contadores.noAsistidos++;
      this.contadores.asistidos = Math.max(0, this.contadores.asistidos - 1); 
    }
  }

  // Función para manejar el registro de retraso o salida anticipada
  marcarSalida(usuario: any, tipo: string): void {
    if (tipo === 'retraso') {
      usuario.descripcion += ' - Llegó tarde';
    } else if (tipo === 'salidaAnticipada') {
      usuario.descripcion += ' - Salida anticipada';
    }
  }

  // Función para manejar la subida de archivos
  subirArchivo(event: any, usuario: any): void {
    const file = event.target.files[0];
    if (file) {
      usuario.archivo = file;
    }
  }

}
