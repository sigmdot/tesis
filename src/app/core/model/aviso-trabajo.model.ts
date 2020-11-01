export interface AvisoTrabajo{
    id?: string;
    nombreAviso: string;
    descAviso: string;
    fechaCreacion: any;
    idUsuarioPosteador: string;
    ubicacion: number[];
    distancia?: number;
    usuariosPostulados?: string[];
    estado?: string;
}
