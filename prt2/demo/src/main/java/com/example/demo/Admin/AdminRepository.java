package com.example.demo.Admin;

import com.example.demo.Admin.Admins;
import org.springframework.data.repository.CrudRepository;

public interface AdminRepository extends CrudRepository<Admins,String> {
}
