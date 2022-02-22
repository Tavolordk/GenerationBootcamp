package com.generation.generationDemo.controller;

import org.springframework.web.bind.annotation.GetMapping;
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
	public String saludar(@RequestParam(value="nombre", defaultValue = "java")String nombre) {
		return "Hola " + nombre;
	}
}
