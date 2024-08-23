## Mentorship Booking System

### Overview

The Mentorship Booking System is a web application that allows students to book 1x1 sessions with mentors. The system includes a frontend built with React and a backend built with Node.js and Express, using SQLite for data storage.

### Setup and Installation

#### Prerequisites

- Node.js and npm installed.
- SQLite for the database.

#### Frontend Setup

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

#### Backend Setup

1. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Start the Express server:
   ```bash
   node app.js
   ```

### Frontend

The frontend is built using React and provides a user interface for booking sessions with mentors. Key components include:

- **BookingForm**: Allows students to book sessions with mentors.
- **MentorList**: Displays a list of available mentors.

### Backend

The backend is built using Node.js and Express, with SQLite as the database. It handles API requests and interacts with the database.

Key files:

- **app.js**: Sets up the Express server and defines API routes.
- **database.db**: SQLite database file containing tables for mentors, students, and bookings.

### API Endpoints

#### GET /mentors

- **Description**: Retrieves a list of all mentors.
- **Response**: Array of mentor objects.

#### POST /bookings

- **Description**: Creates a new booking.
- **Request Body**:
  ```json
  {
    "student_id": 1,
    "mentor_id": 2,
    "start_time": "2024-08-23T12:00:00Z",
    "end_time": "2024-08-23T12:30:00Z",
    "duration": 30
  }
  ```
- **Response**: Booking confirmation with booking ID.

#### GET /bookings

- **Description**: Retrieves all bookings.
- **Response**: Array of booking objects.

### Database Schema

- **students**: Table to store student information.

  - `id`: INTEGER PRIMARY KEY
  - `name`: TEXT
  - `availability`: TEXT
  - `area_of_interest`: TEXT

- **mentors**: Table to store mentor information.

  - `id`: INTEGER PRIMARY KEY
  - `name`: TEXT
  - `availability`: TEXT
  - `areas_of_expertise`: TEXT
  - `is_premium`: BOOLEAN

- **bookings**: Table to store booking information.
  - `id`: INTEGER PRIMARY KEY
  - `student_id`: INTEGER (foreign key to students)
  - `mentor_id`: INTEGER (foreign key to mentors)
  - `start_time`: TEXT
  - `end_time`: TEXT
  - `duration`: INTEGER

### Usage

1. **Frontend**: Navigate to the client directory and start the React app. Use the booking form to select a mentor and book a session.
2. **Backend**: Start the server to handle API requests. Ensure it is running on `http://localhost:5000` for the frontend to communicate with it.
