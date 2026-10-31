
package com.smartagritech.backend.service;

import com.smartagritech.backend.model.Farmer;
import com.smartagritech.backend.repository.FarmerRepository;
import org.springframework.stereotype.Service;

@Service
public class FarmerService {

    private final FarmerRepository farmerRepository;

    public FarmerService(FarmerRepository farmerRepository) {
        this.farmerRepository = farmerRepository;
    }

    public Farmer registerFarmer(Farmer farmer) {

        if (farmerRepository.existsByMobileNumber(
                farmer.getMobileNumber())) {
            throw new IllegalArgumentException(
                    "This mobile number is already registered.");
        }

        return farmerRepository.save(farmer);
    }

    public Farmer getFarmerByMobile(String mobileNumber) {
        return farmerRepository.findByMobileNumber(mobileNumber)
                .orElseThrow(() -> new IllegalArgumentException(
                        "Farmer not found."));
    }
}
