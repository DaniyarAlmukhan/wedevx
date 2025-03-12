export interface IValidationError {
  message?: string;
}

export interface IUser {
  name: string;
}

export interface IAuthState {
  isAuthenticated: boolean;
  user: IUser | null;
}

export interface ILead extends Partial<IFormData>{
  id: number;
  name: string;
  surname: string;
  status: "PENDING" | "REACHED_OUT";
  submitted: string;
  email: string;
}

export interface ILeadState {
  leads: ILead[];
}

export interface IFormData {
  name: string;
  surname: string;
  email: string;
  linkedIn: string;
  visas: string[];
  fileUpload: string;
  additionalInfo: string;
}

export interface ILoginData {
  username?: string;
  password?: string;
}