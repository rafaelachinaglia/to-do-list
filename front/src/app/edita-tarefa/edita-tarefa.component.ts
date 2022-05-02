import { DataService } from '../data/data.service';
import { Tarefa } from '../data/tarefa.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-edita-tarefa',
  templateUrl: './edita-tarefa.component.html',
  styleUrls: ['./edita-tarefa.component.scss']
})
export class EditaTodoComponent implements OnInit {

  task: Tarefa = {
    descricao:''
  };

  constructor( private service: DataService,
    private router: Router,
    private id: ActivatedRoute){}


  ngOnInit(): void {
    const takeId = this.id.snapshot.paramMap.get('id');
    this.service.buscaPorId(String(takeId)).subscribe((task) => {
      this.task = task;

    });
  }

  atualizaTarefa(): void {
    if(this.task.descricao == ''){
      return;
    }
    this.service.atualizaTarefa(this.task).subscribe(() => {

      this.fechaTarefa();

    });
  }

  fechaTarefa():void {
    this.router.navigate(['/']);

   }

 }


