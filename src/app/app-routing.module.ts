import { NgModule } from '@angular/core'; // Importado de maner manual
import {Routes, RouterModule} from '@angular/router'; // RouterModule para indicarle que es el Modulo de las rutas
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { AboutComponent } from './pages/about/about.component';
import { ItemComponent } from './pages/item/item.component';
import { SearchComponent } from './pages/search/search.component';


const app_routes: Routes = [
// Paths para manejar las rutas
{path: 'home', component: PortafolioComponent},
{path: 'about', component: AboutComponent},
{path: 'item/:id', component: ItemComponent},
{path: 'search/:termino', component: SearchComponent},


{path: '**', pathMatch: 'full', redirectTo: 'home'}
];


@NgModule({
imports: [
     RouterModule.forRoot(app_routes, { useHash: true}) // Para utilizar el patron que usa Hash en GitHubPages
],
exports: [
    RouterModule // Para poder usar la etiqueta <router-outlet> en el app.component.html
]
})
export class AppRoutingModule {

}
