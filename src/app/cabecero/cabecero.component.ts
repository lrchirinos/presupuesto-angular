import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  imports: [CommonModule],
  templateUrl: './cabecero.component.html',
  styleUrl: './cabecero.component.css'
})
export class CabeceroComponent {
 @Input() presupuestoTotal!: number;
 @Input() ingresosTotal!: number;
 @Input() egresosTotal!: number;
 @Input() porcentajeTotal!: number;
}
