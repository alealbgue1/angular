import { Fenomenos } from './fenomenos';

export interface Inv {
    id: number,
    nombre: string,
    apellidos: string,
    email: string,
    clave: string,
    fenomenos: Fenomenos[]
}
