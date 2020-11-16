import { Time } from '@angular/common';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

export interface Trabajo{
    id?: string;
    idAvisoAsociado: string;
    idUsuarioEmpleador: string;
    idUsuarioTrabajador: string;
    estado: string;
    fechaInicio: any;
    fechaTermino?: any;
}