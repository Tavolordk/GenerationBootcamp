package com.generation.generationDemo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/index")
public class HomeController {
	@GetMapping("/hola")
	public String saludo() {
		return "HOLA";
	}

	@GetMapping("/saludo")
	public String saludar(@RequestParam(value = "nombre", defaultValue = "java") String nombre
			,@RequestParam(value="apellido") String apellido) {
		return nombre + apellido;
	}
	
	@PostMapping("/login")
	public String login(@RequestParam(value="email")String correo, @RequestParam(value="password")String contrasenia) {
		return correo + "-" + contrasenia;
	}
}
