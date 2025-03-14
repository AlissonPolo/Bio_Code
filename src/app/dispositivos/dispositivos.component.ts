import { Component } from '@angular/core';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.component.html',
  styleUrls: ['./dispositivos.component.css']
})
export class DispositivosComponent {
  dispositivos = [
    {
      tipo: 'Computadora de Escritorio',
      id: 'PC-001',
      iduser: '1030',
      usuario: 'Alisson Polo',
      fecha: '2023-03-15',
      marca: 'Dell',
      serial: '1234-5678-91011',
      horaEntrada: '08:00 AM',
      horaSalida: '08:00 AM'
    },
    {
      tipo: 'Laptop',
      id: 'LAP-002',
      iduser: '1045',
      usuario: 'Juan Pérez',
      fecha: '2023-04-12',
      marca: 'HP',
      serial: '9876-5432-11223',
      horaEntrada: '09:00 AM',
      horaSalida: '06:00 PM'
    },
    {
      tipo: 'Tablet',
      id: 'TAB-003',
      iduser: '1056',
      usuario: 'María López',
      fecha: '2023-05-10',
      marca: 'Samsung',
      serial: '5567-8901-23456',
      horaEntrada: '10:00 AM',
      horaSalida: '05:00 PM'
    },
    {
      tipo: 'Impresora',
      id: 'IMP-004',
      iduser: '1022',
      usuario: 'Carlos Martínez',
      fecha: '2023-06-18',
      marca: 'Canon',
      serial: '7890-1234-56789',
      horaEntrada: '08:30 AM',
      horaSalida: '04:30 PM'
    },
    {
      tipo: 'Escáner',
      id: 'ESC-005',
      iduser: '1098',
      usuario: 'Lucía Rodríguez',
      fecha: '2023-07-22',
      marca: 'Epson',
      serial: '1122-3344-55667',
      horaEntrada: '07:45 AM',
      horaSalida: '03:45 PM'
    },
    {
      tipo: 'Computadora de Escritorio',
      id: 'PC-006',
      iduser: '1102',
      usuario: 'Andrés Gómez',
      fecha: '2023-08-05',
      marca: 'Lenovo',
      serial: '6677-8899-00112',
      horaEntrada: '08:30 AM',
      horaSalida: '06:30 PM'
    }
  ];
}
