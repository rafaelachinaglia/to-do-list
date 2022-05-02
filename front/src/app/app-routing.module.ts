import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditaTodoComponent } from './edita-tarefa/edita-tarefa.component';

const routes: Routes = [
  {path: '', component: PaginaInicialComponent},
  {path:'editar/:id', component: EditaTodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
