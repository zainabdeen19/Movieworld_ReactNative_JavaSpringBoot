# Movie-World Ticket Booking App 

Welcome to the Movie-World Ticket Booking App, a full-stack application that offers a seamless movie ticket booking experience. Developed using modern technologies, this app allows users to browse movies, select theaters, choose seats, and purchase tickets with ease.
This repo only includes the React Native part of the app.

## Features
- **Browse Movies:** Users can view the current movies playing in cinemas. 
- **Movie Details:** Detailed information about movies, including synopsis, ratings, and showtimes.
- **Theater Selection:** Choose from a list of theaters showing the selected movie.
- **Showtime Selection:** Pick convenient showtimes for your movie experience.
- **Ticket Booking:** Book tickets for adults, children, and students.
- **Seat Selection:** Interactive seating plan to choose your preferred seats.
- **Secure Payment:** Enter credit card information for secure transactions.
- **Ticket Confirmation:** Successful bookings generate a ticket for the user.

## Database Schema
The backend is structured around several key entities:
- `theaters`: Information about cinema locations and their screens.
- `movies`: Details of movies that can be booked.
- `showtimes`: Scheduled times for movie screenings.
- `seats`: Seating information for each screen.
- `users`: User accounts for those booking tickets.
- `bookings`: Records of user bookings.
- `payment_details`: Secure storage of payment information.
- `seat_reservations`: Links seats, showtimes, and bookings to track reservations.

Each entity is represented as a table within the database, with relationships that reflect the real-world interactions between them.

## Technologies Used
- **Java Spring Boot**: For robust backend functionality.
- **Hibernate**: Object-relational mapping for database interaction.
- **PostgreSQL**: The primary database system.
- **Maven**: Dependency management and build automation.
- **Frontend:** React Native, JavaScript, Nativewind, and React Native Navigation.
- **Backend:** Java Spring, Hibernate.
 
 
