package com.generation.generationDemo.service;

import com.generation.generationDemo.model.Student;

import java.util.List;

public interface StudentService
{
    void add( Student student );

    void delete( Student student );

    List<Student> all();

    Student findById( String id );

}
