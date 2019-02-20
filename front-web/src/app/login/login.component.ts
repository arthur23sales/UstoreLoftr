import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  usuario = [{ nome: "saruman", senha: "admin", tipo: "adm" },
  { nome: "orc1", senha: "orc1", tipo: "orc" },
  { nome: "orc2", senha: "orc2", tipo: "orc" }]
  login = false;
  cadastrar = false;
  notlogin = false;
  



  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.formLogin = this.fb.group({
      LOGIN: ["", Validators.required],
      SENHA: ["", Validators.required]
    })
  }



  logar() {
      this.usuario.forEach(element => {
        if (element.nome === this.formLogin.controls.LOGIN.value && element.senha === this.formLogin.controls.SENHA.value) {
          this.login = true;
        }

      });
     if (!this.login) {
      alert("Login ou senha inválido")
    }
  }

  cadastro () {
    this.cadastrar = true;
    this.notlogin = true;
  }
}
