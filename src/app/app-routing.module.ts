import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoueursComponent } from './joueurs/joueurs.component';
import { AddJoueurComponent } from './add-joueur/add-joueur.component';
import { UpdateJoueurComponent } from './update-joueur/update-joueur.component';
import { RechercheParEquipeComponent } from './recherche-par-equipe/recherche-par-equipe.component';
import { RechercheParNomComponent } from './recherche-par-nom/recherche-par-nom.component';
import { ListeEquipesComponent } from './liste-equipes/liste-equipes.component';
import { LoginComponent } from './login/login.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { joueurGuard } from './joueur.guard';

const routes: Routes = [
{path: "joueurs", component : JoueursComponent},
//{path: "add-joueur", component : AddJoueurComponent},
{ path: "", redirectTo: "joueurs", pathMatch: "full" },
{path: "updateJoueur/:id", component: UpdateJoueurComponent},
{path: "rechercheParEquipe", component : RechercheParEquipeComponent},
{path: "rechercheParNom", component : RechercheParNomComponent},
{path: "listeEquipes", component : ListeEquipesComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},
{path : "add-joueur", component : AddJoueurComponent, canActivate:[joueurGuard]},









];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
