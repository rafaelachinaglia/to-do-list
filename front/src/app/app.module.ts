import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodosComponent } from './adiciona-nova-tarefa/adiciona-nova-tarefa';
import { TodoItemComponent } from './todas-as-tarefas/todo-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditaTodoComponent } from './edita-tarefa/edita-tarefa.component';

import { MatDialogModule } from '@angular/material/dialog';
import { ToolTipDirective } from './data/tool-tip.directive';
import { HttpClientModule } from '@angular/common/http';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoItemComponent,
    EditaTodoComponent,
    ToolTipDirective,
    PaginaInicialComponent,
    CabecalhoComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
