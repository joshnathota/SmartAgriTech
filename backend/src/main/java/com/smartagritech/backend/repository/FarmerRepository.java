
package com.smartagritech.backend.repository;

import com.smartagritech.backend.model.Farmer;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FarmerRepository extends JpaRepository<Farmer, Long> {

    Optional<Farmer> findByMobileNumber(String mobileNumber);

    boolean existsByMobileNumber(String mobileNumber);
}
