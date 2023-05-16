import { Component , OnInit} from '@angular/core';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.css']
})

export class JoueursComponent implements OnInit  {
  joueurs? : Joueur[]; 
constructor(private joueurService: JoueurService,public authService: AuthService ) {
/*this.joueurs = joueurService.listeJoueurs();*/
}
ngOnInit(): void {
  this.joueurService.listeJoueur().subscribe(js => {
    console.log(js);
    this.joueurs = js;
    });
    
}
chargerJoueurs(){
  this.joueurService.listeJoueur().subscribe(prods => {
    console.log(prods);
    this.joueurs = prods;
    });
}
supprimerJoueur(j: Joueur)
{
  
let conf = confirm("Etes-vous sûr ?");
if (conf)
  this.joueurService.supprimerJoueur(j.idJoueur!).subscribe(() => {
    console.log("produit supprimé");
    this.chargerJoueurs();
    });
  

}}