
import { Component, OnInit} from '@angular/core';
import { DataService } from '../data/data.service';
import { Tarefa } from '../data/tarefa.model';


@Component({
  selector: 'todas-tarefas',
  templateUrl: './todas-as-tarefas.component.html',
  styleUrls: ['./todas-as-tarefas.component.scss']
})
export class TodoItemComponent implements OnInit {


  todasTarefas:Tarefa[] = [];
  task: Tarefa = {
    descricao: '',
    status: false
  };


  constructor(private crudService: DataService) { }

  ngOnInit(): void {
   this.crudService.lerTarefas().subscribe((todos: Tarefa[]) => {
     this.todasTarefas = todos;
   })
  }

  deleteTask(id: number): void {
    const deleteProduct = window.confirm(`Deletar Tarefa?`);

    if (!deleteProduct) {
      return;
    }
    this.crudService.deletaTarefa((this.task.id = id)).subscribe(() => {
        location.reload();

    });
  }

  concluiTarefa(id:number, status:boolean) {

    this.todasTarefas.forEach((x) => {
      if (id == x.id) {
        let marcar = (x.status = !status);
        let descricao = x.descricao;

        this.task = {
          id: id,
          descricao: descricao,
          status : marcar,
        };

        this.crudService.atualizaTarefa(this.task).subscribe(() => {

        });
      }
    });

  }

}
