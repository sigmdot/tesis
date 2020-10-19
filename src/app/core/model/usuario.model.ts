import { Url } from 'url';

export interface Usuario{
    id?: string;
    nombres: string;
    apellidos: string;
    foto?: string;
    region: string;
    telefono: string;
    sobreMi: string;
}