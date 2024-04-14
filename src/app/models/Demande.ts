import { Etat } from "./Etat";
import { User } from "./user";

export class Demande {
  id?: number;
  nom?: string;
  acces?: string;
  description?: string;
  type?: string;
  etat?: Etat;
  user?: User;


}
