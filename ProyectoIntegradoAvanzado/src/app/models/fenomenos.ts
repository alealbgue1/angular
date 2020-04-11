import { Inv } from './inv';
import { Tipos } from './tipos';

export interface Fenomenos {
    id: number,
    nombres: string,
    lugar: string,
    fecha: Date,
    descripcion: string,
    inv: Inv,
    tipos: Tipos,
}
