package com.example.demo.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.SalonModel;
import com.example.demo.repositories.SalonRepository;

@Service
public class SalonService {
	private final SalonRepository salonRepository;

	public SalonService(@Autowired SalonRepository salonRepository) {
		this.salonRepository = salonRepository;
	}
	
	//Obtener y mostrar elementos
	public ArrayList<SalonModel> obtener(){
		return (ArrayList<SalonModel>) salonRepository.findAll();
	}
	
	//Consultar solo un elemento por medio de ID
	public Optional<SalonModel> findById(int id) {
		return salonRepository.findById(id);
	}
	
	//Eliminar un elemento por medio de ID
	public boolean deleteById(int id) {
        try {
        	salonRepository.deleteById(id);
        	return true;
        }catch(Exception e) {
        	e.printStackTrace(System.out);
        	return false;
        }
	}
	
	
	//Guardar datos
	public SalonModel guardar(SalonModel salonModel) {
		return salonRepository.save(salonModel);
	}
	
}
