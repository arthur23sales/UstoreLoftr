package com.tlotr.ustore.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LoginController {

	@RequestMapping(value="/Login", method=RequestMethod.GET)
	public String getUsuarioController() {
		return "Login";
		
	}
	@RequestMapping (value="/Login",method=RequestMethod.POST)
	public String login(@ModelAttribute(name="UsuarioController") UsuarioController usuarioController, Model model) {
		
		String usuario = usuarioController.getUsuario();
		String senha = usuarioController.getSenha();
	if("admin".equals(usuario) && "admin".equals(senha)) {
		return "home";
	} 
	model.addAttribute("Invalido", true);
	 return "Login";
}
}