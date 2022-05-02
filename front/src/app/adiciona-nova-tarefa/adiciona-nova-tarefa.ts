import { Tarefa } from '../data/tarefa.model';
import { DataService } from '../data/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nova-tarefa',
  templateUrl: './adiciona-nova-tarefa.html',
  styleUrls: ['./adiciona-nova-tarefa.scss']
})
export class TodosComponent implements OnInit {


  emptyInput: boolean = false;


  tarefa: Tarefa = {
   descricao:''
  }

  constructor(private crudService: DataService) {}

  ngOnInit(): void {}


  novaTarefa(): void {

    if (this.tarefa.descricao == '') {
      this.emptyInput = true;
      return;
    }

    this.crudService.novaTarefa(this.tarefa).subscribe(() => {
      location.reload()
    });

    this.cleanInput();

  }

  onKeyUp(){
    this.emptyInput = false;

  }

  cleanInput() {
    this.tarefa.descricao = '';
  }

}

