import { Component, OnInit } from '@angular/core';
import { Goblin } from './goblinModel';
import { Goblins } from './goblins';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  desloga = false;
  listaGoblins = Goblins;
  listaGoblinsRohan: Goblin[];
  listaGoblinsOrthanc: Goblin[];
  listaGoblinsIsengar: Goblin[];
  listaGoblinSelecionado: Goblin[];
  goblinSelected: Goblin;
  cidadeSelecionada;
  desabilitado = true;


  constructor() { }

  ngOnInit() {
  }

  deslogar() {
    this.desloga = true;
  }

  selectCidade(cidade) {
    this.cidadeSelecionada = cidade;
    this.desabilitado = false;
  }


  fechar() {
    this.cidadeSelecionada = undefined;
    this.desabilitado = true;
    /* this.checado = false; */
    /* this.listaGoblinSelecionado = null;
    this.goblinSelected = null;
     */
  }
  enviar() {
    if (this.listaGoblinsIsengar === undefined && this.cidadeSelecionada === "2") {
      this.listaGoblinsIsengar = [];
    }
    if (this.listaGoblinsOrthanc === undefined && this.cidadeSelecionada === "1") {
      this.listaGoblinsOrthanc = [];
    }
    if (this.listaGoblinsRohan === undefined && this.cidadeSelecionada === "3") {
      this.listaGoblinsRohan = [];
    }
// Validação de lista ou objeto
    if (this.cidadeSelecionada === "2" && this.listaGoblinSelecionado.length > 1) {
      this.listaGoblinsIsengar = this.listaGoblinSelecionado;
    } else if(this.cidadeSelecionada === "2" &&  this.listaGoblinSelecionado.length === 1){
      this.listaGoblinsIsengar.push(this.goblinSelected)
    }

    if (this.cidadeSelecionada === "1" && this.listaGoblinSelecionado.length > 1) {
      this.listaGoblinsOrthanc = this.listaGoblinSelecionado;
    } else if(this.cidadeSelecionada === "1" &&  this.listaGoblinSelecionado.length === 1) {
      this.listaGoblinsOrthanc.push(this.goblinSelected)
    }
    
    if (this.cidadeSelecionada === "3" && this.listaGoblinSelecionado.length > 1) {
      this.listaGoblinsRohan = this.listaGoblinSelecionado;
    } else if(this.cidadeSelecionada === "3" &&  this.listaGoblinSelecionado.length === 1) {
      this.listaGoblinsRohan.push(this.goblinSelected)
    }
    this.listaGoblinSelecionado = [];
    alert(" enviado");
  }


   

  selectedGoblin(goblin) {
    if (this.cidadeSelecionada !== undefined) {
      if (this.listaGoblinSelecionado === undefined) {
        this.listaGoblinSelecionado = [];
      }
    } if (this.listaGoblinSelecionado !== undefined) {
      this.listaGoblinSelecionado.push(goblin);
      this.goblinSelected = goblin;
      /* this.checado = true; */
    }
  }
}
