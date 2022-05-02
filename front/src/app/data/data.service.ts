import { Injectable } from '@angular/core';
import { Tarefa } from './tarefa.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

   private baseUrl = 'https://localhost:5001/tarefa';


  constructor(private http: HttpClient) {

   }

   lerTarefas(): Observable<Tarefa[]> {
    return this.http.get<Tarefa[]>(this.baseUrl);
  }

   buscaPorId(id: string): Observable<Tarefa>{
    return this.http.get<Tarefa>(`${this.baseUrl}/${id}`)
  }

  novaTarefa(newTask: Tarefa): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.baseUrl, newTask);
  }

  atualizaTarefa(task: Tarefa): Observable<Tarefa>{
    const url = `${this.baseUrl}/${task.id}`
    return this.http.put<Tarefa>(url, task)
  }

  deletaTarefa(id: number): Observable<Tarefa> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Tarefa>(url);
  }

}
