import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent implements OnInit {

  @Output() public emmitItemListaDeTarefas = new EventEmitter();

  adicionaItemAListaDeTerafa: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  public submeterItemParaAListaDeTarefas(): void {
    this.adicionaItemAListaDeTerafa = this.adicionaItemAListaDeTerafa.trim();

    if (this.adicionaItemAListaDeTerafa) {
      this.emmitItemListaDeTarefas.emit(this.adicionaItemAListaDeTerafa);
      this.adicionaItemAListaDeTerafa = "";
    }
  }
}
