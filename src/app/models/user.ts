import { Role } from "./role";

export class User {
  id?: number;
  username?: string;
  password?: string;
  email?: string;
  numtel?: string;
  code?: string;
  refnv?: string;
  grade?: string;
  status?: string;
  resetPasswordToken?: string;
  registerToken?: string;
  roles?: Role[];
}
