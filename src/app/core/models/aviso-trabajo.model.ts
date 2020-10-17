import { Interface } from "readline";

export interface AvisoTrabajo{
    id?: string;
    nombreAviso: string;
    descAviso: string;
    fechaCreacion: Date;
    idUsuarioPosteador: string;
    ubicacion: number[];
    distancia?: number;
}