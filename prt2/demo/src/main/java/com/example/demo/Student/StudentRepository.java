package com.example.demo.Student;

import com.example.demo.Student.Students;
import org.springframework.data.repository.CrudRepository;

public interface StudentRepository extends CrudRepository<Students, Integer> {

}
