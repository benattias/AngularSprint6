import { Injectable } from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { Equipe } from "../model/equipe.model";
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EquipeWrapper } from '../model/EquipeWrapped.model';

const httpOptions = {
 
  headers: new HttpHeaders( {'Content-Type': 'application/json'} )
  };
  
@Injectable({
  providedIn: 'root'
})
export class JoueurService {
apiURL: string = 'http://localhost:8080/joueurs/api';
apiURLEq: string = 'http://localhost:8080/joueurs/eq';

joueurs : Joueur[];
joueur! : Joueur;
/*equipes : Equipe[];*/

constructor(private http : HttpClient) {

this.joueurs = [
  {idJoueur : 1, nomJoueur : "ahmed", prenomJoueur : "ben salah", dateNaissance : new Date("01/14/209"),equipe : {idEq : 1, nomEq : "A"}},
    {idJoueur : 2, nomJoueur : "aziz", prenomJoueur : "amara", dateNaissance : new Date("12/17/2010"),equipe : {idEq : 2, nomEq : "B"}},
    {idJoueur : 3, nomJoueur :"amine", prenomJoueur : "ben foulen", dateNaissance : new Date("02/20/2008"),equipe : {idEq : 1, nomEq : "A"}}
]
/*this.equipes = [ {idEq : 1, nomEq : "A"},
{idEq : 2, nomEq : "B"}];*/
}
listeJoueur(): Observable<Joueur[]>{
  return this.http.get<Joueur[]>(this.apiURL);
  }
ajouterJoueur( prod: Joueur):Observable<Joueur>{
  return this.http.post<Joueur>(this.apiURL, prod, httpOptions);
  }
supprimerJoueur(idJoueur: number) {
    const url = `${this.apiURL}/${idJoueur}`;
    return this.http.delete(url, httpOptions);
    }

 
  
  consulterJoueur(id:number):  Observable<Joueur>{
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Joueur>(url);
      
    }
    trierJoueurs(){
      this.joueurs = this.joueurs.sort((n1,n2) => {
        if (n1.idJoueur! > n2.idJoueur!) {
            return 1;
        }
       if (n1.idJoueur! < n2.idJoueur!) {
            return -1;
        }
      return 0;
    });
    }

    updateJoueur(j:Joueur)
  {
    return this.http.put<Joueur>(this.apiURL, j, httpOptions);

  } 
  
  listeEquipes():Observable<EquipeWrapper>{
    return this.http.get<EquipeWrapper>(this.apiURLEq);
    }
  /*consulterEquipe(id:number): Equipe{
      return this.equipes.find(eq => eq.idEq == id)!;
      }*/
      rechercherParEquipe(idEq: number):Observable< Joueur[]> {
        const url = `${this.apiURL}/jsEq/${idEq}`;
        return this.http.get<Joueur[]>(url);
        }
      rechercherParNom(nom: string):Observable< Joueur[]> {
          const url = `${this.apiURL}/jsByName/${nom}`;
          return this.http.get<Joueur[]>(url);
          }   
        ajouterEquipe( cat: Equipe):Observable<Equipe>{
            return this.http.post<Equipe>(this.apiURLEq, cat, httpOptions);
            }   
}
