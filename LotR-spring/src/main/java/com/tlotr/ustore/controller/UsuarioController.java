package com.tlotr.ustore.controller;

import org.springframework.stereotype.Controller;

@Controller
public class UsuarioController {
	
	private String usuario;
	private String senha;
	public UsuarioController() {
		super();
		
	}
	public String getUsuario() {
		return usuario;
	}
	public void setUsuario(String usuario) {
		this.usuario = usuario;
	}
	public String getSenha() {
		return senha;
	}
	public void setSenha(String senha) {
		this.senha = senha;
	}

	
}
