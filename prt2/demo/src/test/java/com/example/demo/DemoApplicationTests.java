package com.example.demo;


import com.example.demo.Admin.AdminRepository;
import com.example.demo.Admin.Admins;
import com.example.demo.Courses.Courses;
import com.example.demo.Courses.CoursesRepository;
import com.example.demo.Student.StudentRepository;
import com.example.demo.Student.Students;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;



@SpringBootTest
class DemoApplicationTests {

	@Autowired
	StudentRepository sRepo;

	@Autowired
	CoursesRepository cRepo;

	@Autowired
	AdminRepository aRepo;

	@Test
	void contextLoads() {
	}

	@Test
	void createstudent(){
		Students s = new Students(11,"loka", "monii", "lokamonni@joo");
		sRepo.save(s);
	}

	@Test
	void readstudent(){
		Students s = sRepo.findById(10).get();
		System.out.println(s.toString());

	}

	@Test
	void createcourse(){
		Courses c = new Courses(2,"fysiikka","chilleberg");
		cRepo.save(c);
	}

	@Test
	void createAdmin(){
		//the only user created is this and the password is in hash
		Admins A = new Admins("ron","123");
		System.out.println(A.toString());
		aRepo.save(A);
	}

	@Test
	void updateStudent() {
		Students s = sRepo.findById(10).get();
		s.setFirstname("ron");
		sRepo.save(s);
	}


}
