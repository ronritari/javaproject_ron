package com.example.demo.Courses;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Courses {
    @Id
    private int courseID;

    private String name;
    private String teacher;

    @Override
    public String toString() {
        return "Courses{" +
                "courseID=" + courseID +
                ", name='" + name + '\'' +
                ", teacherName='" + teacher + '\'' +
                '}';
    }

    public Courses() {}

    public Courses(int courseID, String name, String teacher) {
        this.courseID = courseID;
        this.name = name;
        this.teacher = teacher;
    }

    public int getCourseID() {
        return courseID;
    }

    public void setCourseID(int courseID) {
        this.courseID = courseID;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getTeacher() {
        return teacher;
    }

    public void setTeacher(String teacher) {
        this.teacher = teacher;
    }
}
