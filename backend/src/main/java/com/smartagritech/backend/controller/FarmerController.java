
package com.smartagritech.backend.controller;

import com.smartagritech.backend.model.Farmer;
import com.smartagritech.backend.service.FarmerService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {
    "http://127.0.0.1:5500",
    "http://localhost:5500"
})
@RestController
@RequestMapping("/api/farmers")
public class FarmerController {

    private final FarmerService farmerService;

    public FarmerController(FarmerService farmerService) {
        this.farmerService = farmerService;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerFarmer(
            @RequestBody Farmer farmer) {
        try {
            Farmer savedFarmer =
                    farmerService.registerFarmer(farmer);

            return ResponseEntity.status(HttpStatus.CREATED)
                    .body(savedFarmer);

        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.CONFLICT)
                    .body(e.getMessage());
        }
    }

    @GetMapping("/{mobileNumber}")
    public ResponseEntity<?> getFarmer(
            @PathVariable String mobileNumber) {
        try {
            return ResponseEntity.ok(
                    farmerService.getFarmerByMobile(mobileNumber));

        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
                    .body(e.getMessage());
        }
    }
}
