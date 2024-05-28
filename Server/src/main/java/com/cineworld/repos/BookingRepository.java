package com.movieworld.repos;

import com.movieworld.entity.Booking;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BookingRepository extends JpaRepository <Booking , Long> {

}
 
