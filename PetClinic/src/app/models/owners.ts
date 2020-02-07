import {Pet} from "./pet";

export interface Owners {
    id: number,
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    telephone: string,
    pets: Pet[]
}
