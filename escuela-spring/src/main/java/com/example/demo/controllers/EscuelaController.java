package com.example.demo.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.SalonModel;
import com.example.demo.services.SalonService;

@RestController
public class EscuelaController {
	private final SalonService salonService;

	public EscuelaController(@Autowired SalonService salonService) {
		this.salonService = salonService;
	}
	//mostrar datos de Salon
	@GetMapping("/obtener")
	public ArrayList<SalonModel> obtenerDato(){
		return salonService.obtener();
	}
	
	@GetMapping("/obtener/{id}")
	public Optional<SalonModel> obtenerUno(@PathVariable ("id") int id) {
		return salonService.findById(id);
	}
	
	@DeleteMapping("/eliminar/{id}")
	public boolean eliminar(@PathVariable ("id") int id) {
		return salonService.deleteById(id);
	}
	
	@PostMapping("/agregar")
	public SalonModel agregar(@RequestBody SalonModel salonModel) {
		return salonService.guardar(salonModel);
	}
	
	@PutMapping("/actualizar")
	public SalonModel actualizar(@RequestBody SalonModel salonModel) {
		return salonService.guardar(salonModel);
	}
}
