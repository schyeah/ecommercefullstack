package com.ws101.rebadulla.ecommerce.exception;

import java.util.HashMap;
import java.util.Map;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import jakarta.persistence.EntityNotFoundException;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(EntityNotFoundException.class)

    public ResponseEntity<Map<String, String>>
    handleNotFound(EntityNotFoundException ex) {

        Map<String, String> error = new HashMap<>();

        error.put("error", ex.getMessage());

        return new ResponseEntity<>(
                error,
                HttpStatus.NOT_FOUND
        );
    }

    @ExceptionHandler(DataIntegrityViolationException.class)

    public ResponseEntity<Map<String, String>>
    handleDataError(DataIntegrityViolationException ex) {

        Map<String, String> error = new HashMap<>();

        error.put("error", "Database error");

        return new ResponseEntity<>(
                error,
                HttpStatus.BAD_REQUEST
        );
    }
}