import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { Joueur } from '../model/joueur.model';
import { JoueurService } from '../services/joueur.service';
import { Equipe } from '../model/equipe.model';

@Component({
  selector: 'app-update-joueur',
  templateUrl: './update-joueur.component.html',
  styleUrls: ['./update-joueur.component.css']
})
export class UpdateJoueurComponent implements OnInit {
  currentJoueur = new Joueur();
  equipes! : Equipe[];
updatedEqId! : number;

  constructor(private activatedRoute: ActivatedRoute,
    private router :Router, 
  private joueurService: JoueurService) { }
  ngOnInit() {
    this.joueurService.listeEquipes().
    subscribe(cats => {this.equipes = cats._embedded.equipes;
    console.log(cats);
    });

  this.joueurService.consulterJoueur(this.activatedRoute.snapshot.params['id']).
  subscribe( prod =>{ this.currentJoueur = prod; 
  this.updatedEqId = 
  this.currentJoueur.equipe.idEq;
  } ) ;
  }
  updateJoueur()
{ //console.log(this.currentProduit);
  this.currentJoueur.equipe = this.equipes.find(cat => cat.idEq == this.updatedEqId)!;
  this.joueurService.updateJoueur(this.currentJoueur).subscribe(j => {
    this.router.navigate(['joueurs']); }
    );
    
}

  }