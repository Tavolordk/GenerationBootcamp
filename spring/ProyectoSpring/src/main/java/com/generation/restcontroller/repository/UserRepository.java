package com.generation.restcontroller.repository;

import com.generation.restcontroller.model.User;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
List<User> findByNameContaining(String name);

}
