import { Component } from '@angular/core';

@Component({
  selector: 'app-parqueadero',
  templateUrl: './parqueadero.component.html',
  styleUrls: ['./parqueadero.component.css']
})
export class ParqueaderoComponent {
  vehiculos = [
    { usuario: '1000', tipo: 'Automóvil', placa: 'ABC-123', espacio: 'A1', horaEntrada: '08:00 AM' ,fecha:'30/11/2024'},
    { usuario: '1216', tipo: 'Moto', placa: 'XYZ-789', espacio: 'B3', horaEntrada: '09:15 AM', fecha:'30/11/2024'},
    { usuario: '980', tipo: 'Camioneta', placa: 'LMN-456', espacio: 'C2', horaEntrada: '10:30 AM', fecha:'30/11/2024' },
    { usuario: '1782', tipo: 'Automóvil', placa: 'DEF-321', espacio: 'A4', horaEntrada: '11:00 AM', fecha:'30/11/2024'},
    { usuario: '2024', tipo: 'Moto', placa: 'PQR-123', espacio: 'B1', horaEntrada: '12:00 PM', fecha:'30/11/2024' }
  ];
}
