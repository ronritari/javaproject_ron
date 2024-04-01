package com.example.demo.Courses;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CoursesController {
    private final CoursesRepository repo;

    public CoursesController(CoursesRepository cr) {this.repo = cr; }

    @GetMapping("/Courses")
    List<Courses> GetAllCourses(){
        return (List<Courses>) repo.findAll();
    }

    @GetMapping("/Courses/{id}")
    Courses getCoursesById(@PathVariable Integer id) {
        Optional<Courses> course = repo.findById(id);
        return course.orElse(null);
    }

    @PostMapping("/addCourses")
    public ResponseEntity<String> addCourse(@RequestBody Courses course) {
        System.out.println("Received JSON: " + course.toString());
        repo.save(course);
        return new ResponseEntity<>("Course added successfully", HttpStatus.OK);
    }

    @PutMapping("/updateCourses/{id}")
    public ResponseEntity<String> updateCourse(@PathVariable Integer id, @RequestBody Courses updatedCourse) {
        System.out.println("Received JSON: " + updatedCourse.toString());
        Courses course = repo.findById(id).get();

        //updates if course information is changed or in input. if input dosent have any info it stays unchanged

        if (course == null) {
            return null;
        } else {
            // Update the non-null properties
            if (updatedCourse.getName() != "") {
                course.setName(updatedCourse.getName());
            }

            if (updatedCourse.getTeacher() != "") {
                course.setTeacher(updatedCourse.getTeacher());
            }

            repo.save(course);
            return new ResponseEntity<>("Course updated successfully", HttpStatus.OK);
        }
    }

    @DeleteMapping("/deleteCourses/{id}")
    public ResponseEntity<String> deleteCourse(@PathVariable Integer id) {
        repo.delete(repo.findById(id).get());
        return new ResponseEntity<>("Course deleted successfully", HttpStatus.OK);
    }

}
