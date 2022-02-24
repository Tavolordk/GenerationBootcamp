package com.generation.generationDemo.service.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.generation.generationDemo.model.Student;
import com.generation.generationDemo.service.StudentService;

@Service
public class StudentServiceImpl implements StudentService{
private final List<Student> studentList = new ArrayList<Student>();
	@Override
	public void add(Student student) {
		studentList.add(student);
	}

	@Override
	public void delete(Student student) {
	     for(int i=0;i<studentList.size();i++) {
	    	 studentList.remove(student.getIdType());
	     }
	}

	@Override
	public List<Student> all() {
	      for(int i=0;i<studentList.size();i++) {
	    	  studentList.get(i);
	      }
	      return studentList;
	}

	@Override
	public Student findById(String id) {
              return studentList.get(Integer.parseInt(id));
	}

}
