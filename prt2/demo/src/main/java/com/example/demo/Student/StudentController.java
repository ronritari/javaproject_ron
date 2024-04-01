package com.example.demo.Student;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class StudentController {
    private final StudentRepository repo;

    public StudentController(StudentRepository sr){
        this.repo = sr;
    }

    //get all students
    @GetMapping("/Students")
    List<Students> GetAllStudents(){
        return (List<Students>) repo.findAll();
    }

    // Search by ID
    @GetMapping("/Students/{id}")
    Students getStudentById(@PathVariable Integer id) {
        Optional<Students> student = repo.findById(id);
        return student.orElse(null);
    }

    // Add new student
    @PostMapping("/addStudents")
    public ResponseEntity<String> addStudent(@RequestBody Students student) {
        System.out.println("Received JSON: " + student.toString());
        repo.save(student);
        return new ResponseEntity<>("Student added successfully", HttpStatus.OK);
    }

    @PutMapping("/Students/{id}")
    public ResponseEntity<String> updateStudent(@PathVariable Integer id, @RequestBody Students updatedStudent) {
        System.out.println("Received JSON: " + updatedStudent.toString());
        Students student = repo.findById(id).get();

        //updates if student information is changed or in input. if input dosent have any info it stays unchanged

        if (student == null) {
            return null;
        } else {
            // Update the non-null properties
            if (updatedStudent.getFirstname() != "") {
                student.setFirstname(updatedStudent.getFirstname());
            }

            if (updatedStudent.getLastname() != "") {
                student.setLastname(updatedStudent.getLastname());
            }

            if (updatedStudent.getEmail() != "") {
                student.setEmail(updatedStudent.getEmail());
            }
        }

        // Save the updated student
        repo.save(student);
        return new ResponseEntity<>("Student updated successfully", HttpStatus.OK);
    }

    //delete student
    @DeleteMapping("/deleteStudents/{id}")
    public ResponseEntity<String> deleteStudent(@PathVariable Integer id) {
        repo.delete(repo.findById(id).get());
        return new ResponseEntity<>("Student deleted successfully", HttpStatus.OK);
    }




}
