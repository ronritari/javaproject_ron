package com.example.demo.Admin;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminsController {
    private final AdminRepository repo;

    public AdminsController(AdminRepository ar) {this.repo = ar;}



    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody Admins credentials) {

        System.out.println("Received JSON: " + credentials.toString());

        Admins data = new Admins(credentials.getUsername(), credentials.getPasswordHash());
        //System.out.println(data.toString());

        Admins admin = repo.findById(credentials.getUsername()).get();
        //System.out.println(admin.toString());

        if (admin != null && data.equals(admin)) {
            // Authentication successful
            return new ResponseEntity<>("Login successful", HttpStatus.OK);

        } else {
            // Authentication failed
            return new ResponseEntity<>("Login failed", HttpStatus.UNAUTHORIZED);
        }
    }


}
