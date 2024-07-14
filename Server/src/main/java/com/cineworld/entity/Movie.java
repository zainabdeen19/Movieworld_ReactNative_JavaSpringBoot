package com.movieworld.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.annotation.Nullable;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "movies")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @Column(name = "tmdb_id", nullable = true)
    private Integer tmdbId ;

    @Column(columnDefinition = "text")



    private String director;


    private double rating;
    private String posterUrl;
    private String trailerUrl;
    private String backdropUrl;
    private String row;

    @OneToMany(mappedBy = "movie", cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Showtime> showtimes;
}

 
