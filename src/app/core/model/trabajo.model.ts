export interface Trabajo{
    id?: string;
    idAvisoAsociado: string;
    idUsuarioEmpleador: string;
    idUsuarioTrabajador: string;
    estado: string;
    fechaInicio: Date;
    fechaTermino?: Date;
}