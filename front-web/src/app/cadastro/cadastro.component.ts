import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit() {

    this.formCadastro = this.fb.group({
      LOGIN: ["", Validators.required],
      SENHA: ["", Validators.required],
      RACA: ["", Validators.required],
      CIDADE: ["", Validators.required]
    })
  }

  cadastrar() {
// método de inserir
  }
  voltar(){
    // como esta sem banco chamei o metodo de reload para voltar para pagina inicial
    window.location.reload()
  }
}
