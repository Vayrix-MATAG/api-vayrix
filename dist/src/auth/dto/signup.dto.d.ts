import { type SignupRole } from '../../common/constants/roles.constant';
export declare class SignupDto {
    role: SignupRole;
    nom: string;
    prenom: string;
    telephone: string;
    email: string;
    password: string;
}
