import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestCComponent } from './rest-c/rest-c.component';
import { TableComponent } from './table/table.component';
import { DirectivesComponent } from './directives/directives.component';
import { PipesComponent } from './pipes/pipes.component';
import {HeroesComponent} from "./heroes/heroes.component";
const routes: Routes = [

  {
    path: 'form',
    component: RestCComponent

  },
  {
    path: 'table',
    component: TableComponent

  },
  {
    path: 'directives',
    component: DirectivesComponent

  },
  {
    path: 'heroes',
    component: HeroesComponent

  },
  {
    path: 'pipes',
    component: PipesComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
