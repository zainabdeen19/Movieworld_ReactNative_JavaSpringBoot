package com.movieworld.repos;

import com.movieworld.entity.Showtime;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ShowtimeRepository extends JpaRepository<Showtime, Long> {

    List<Showtime> findAllByMovieId(Long id);

    List<Showtime> findAllByTheater_IdAndMovieId(Long theaterId, Long movieId);

}
 
 
