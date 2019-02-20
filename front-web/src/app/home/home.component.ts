import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  desloga = false;
  orcSelected;
  constructor() { }

  ngOnInit() {
  }
  //deslogar do usuario
  deslogar() {
    this.desloga = true;
  }

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
}
