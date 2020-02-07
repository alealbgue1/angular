import {Visits} from "./visits";
import { Pettype } from "./pettype";
import {Owners} from "./owners";

export class Pet {
    id: number;
    name: string;
    birth_date: Date;
    type: Pettype;
    owner: Owners;
    visits: Visits[];

}
