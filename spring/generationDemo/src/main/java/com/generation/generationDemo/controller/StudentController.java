package com.generation.generationDemo.controller;

import com.generation.generationDemo.model.Student;
import com.generation.generationDemo.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StudentController
{

    private final StudentService studentService;

    public StudentController( @Autowired StudentService studentService )
    {
        this.studentService = studentService;
    }

    @GetMapping( "/student/{id}" )
    Student findById( @PathVariable( "id" ) String id )
    {
    	Student s1 = new Student("1",1,"Carlos Eduardo","Jesus",8);
    	Student s2 = new Student("2",3,"Raúl","Sanchez",3);
    	Student s3 = new Student("3",34,"Rodrigo","Leyva",34);
    	
    	studentService.add(s1);
    	studentService.add(s2);
    	studentService.add(s3);
    	
        return studentService.findById( id );
    }

}
