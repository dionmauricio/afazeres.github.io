import { Component, DoCheck, OnInit } from '@angular/core';

// Interface
import { ListaDeTerafa } from '../../model/lista-de-terafa';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, DoCheck {

  listaTarefas: Array<ListaDeTerafa> = JSON.parse(localStorage.getItem("listaDb") || '[]');

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.salvarNoBancoLocal();
  }

  public setEmitNaListaDeTarefas(event: string): void {
    this.listaTarefas.push({ tafera: event, checagem: false });
  }

  public removerItemDaListaDeTarefas(event: number): void {
    const confirmar = window.confirm("Deseja mesmo remover o item da lista")

    if (confirmar)
      this.listaTarefas.splice(event, 1);
  }

  public removeTodosOsItemDaListaDeTarefas(): void {
    const confirmar = window.confirm("Você está preste a excluir todos os itens da lista, deseja continuar?")

    if (confirmar)
      this.listaTarefas = [];
  }

  public validarCampoEmBranco(event: string, index: number): void {
    if (!event.length) {
      const confirmar = window.confirm("A tarefa está vazia, deseja deletar?");
      if (confirmar) {
        this.removerItemDaListaDeTarefas(index);
      }
    }
  }

  public salvarNoBancoLocal(): void {
    if (this.listaTarefas) {
      this.listaTarefas.sort((frist, last) => Number(frist.checagem) - Number(last.checagem));
      localStorage.setItem("listaDb", JSON.stringify(this.listaTarefas));
    }
  }
}
