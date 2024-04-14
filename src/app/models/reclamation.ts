import { Etat } from "./Etat";
import { User } from "./user";

export class Reclamation {
  id?: number;
  type?: string;
  description?: string;
  etat?: Etat;
  user?: User;
}
