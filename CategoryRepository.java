package com.ws101.rebadulla.ecommerce.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ws101.rebadulla.ecommerce.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}