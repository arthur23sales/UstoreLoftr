import { Component, OnInit } from '@angular/core';
import { Goblins } from './goblins';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  desloga = false;
  orcSelected;
  listaGoblins = Goblins;
  goblinselecionado: any[];
  constructor() { }

  ngOnInit() {
  }
  //deslogar do usuario
  deslogar() {
    this.desloga = true;
  }
  //selecionar Cidade
  selectCidade(cidade) { }

  // recebe o valor selelecionado 
  enviandoOrc(evento) {
    this.orcSelected = evento;
  }
  // gera um alerta de envio 
  enviar() {
    // metodo de inserir
    alert(this.orcSelected + " enviado");
    this.orcSelected = "";
  }
  selectedGoblin(goblin) {
    if (this.goblinselecionado === undefined) {
      this.goblinselecionado = [];
    }
   this.goblinselecionado.push(goblin);
  }
}
