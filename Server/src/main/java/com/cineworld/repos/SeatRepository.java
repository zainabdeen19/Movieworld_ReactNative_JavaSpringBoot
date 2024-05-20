package com.movieworld.repos;

import com.movieworld.entity.Seat;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SeatRepository extends JpaRepository<Seat, Long> {


    List<Seat> findByScreenId(Long screenId);

    List<Seat> findByIdIn(List<Long> ids);
}
 
