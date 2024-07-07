package com.movieworld.controllers;

import com.movieworld.entity.Showtime;
import com.movieworld.entity.Theater;
import com.movieworld.services.ShowtimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import java.util.List;

@RestController
@RequestMapping("/api/showtimes")
public class ShowtimeController {

    @Autowired
    private ShowtimeService showtimeService;

    // POST: Create a new showtime
    @PostMapping("/")
    public ResponseEntity<Showtime> createShowtime(@RequestBody Showtime showtime) {
        try {
            Showtime newShowtime = showtimeService.createShowtime(showtime);
            return ResponseEntity.ok(newShowtime);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(null); // Consider more specific error handling
        }
    }

    // GET: Retrieve a specific showtime by ID
    @GetMapping("/{id}")
    public ResponseEntity<Showtime> getShowtimeById(@PathVariable Long id) {
        Showtime showtime = showtimeService.getShowtimeById(id);
        return showtime != null ? ResponseEntity.ok(showtime) : ResponseEntity.notFound().build();
    }

    // GET: Retrieve all showtimes
    @GetMapping("/")
    public ResponseEntity<List<Showtime>> getAllShowtimes() {
        return ResponseEntity.ok(showtimeService.getAllShowtimes());
    }

    // PUT: Update a specific showtime
    @PutMapping("/{id}")
    public ResponseEntity<Showtime> updateShowtime(@PathVariable Long id, @RequestBody Showtime showtimeDetails) {
        try {
            Showtime updatedShowtime = showtimeService.updateShowtime(id, showtimeDetails);
            return ResponseEntity.ok(updatedShowtime);
        } catch (Exception e) {
            return ResponseEntity.notFound().build(); // Consider more specific error handling
        }
    }

    // DELETE: Delete a specific showtime
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShowtime(@PathVariable Long id) {
        try {
            showtimeService.deleteShowtime(id);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build(); // Consider more specific error handling
        }
    }
    @GetMapping("/movie/{id}")
    public List<Theater> getTheaterByMovieId(@PathVariable Long id) {
        return showtimeService.getTheatersByMovieId(id);

    }

    //get showtime by theater id and movie id
    @GetMapping("/theater/{theaterId}/movie/{movieId}")
    public List<Showtime> getShowtimesByTheaterIdAndMovieId(@PathVariable Long theaterId, @PathVariable Long movieId) {
        return showtimeService.getShowtimesByTheaterIdAndMovieId(theaterId, movieId);
    }






}

 
 
