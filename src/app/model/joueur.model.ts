import { Equipe } from "./equipe.model";
export class Joueur {
    idJoueur? : number;
    nomJoueur? : string;
    prenomJoueur? : string;
     dateNaissance? : Date ;
     equipe! : Equipe;

    }