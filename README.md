# Cinema Booking App 

Cinema Booking Mobile App, a Java Spring Boot application that handles the management of cinema operations including movie listings, showtimes, seat reservations, and payment processing. React-Native serves as the front end of the application. The backend is structured around several key entities which helps store Information about cinema locations and their screens, details of movies that can be booked, scheduled times for movie screenings, seating information for each screen, user accounts for those booking tickets, records of user bookings, secure storage of payment information, links seats, showtimes, and bookings to track reservations.


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
 
 
