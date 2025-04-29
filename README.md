# Student Management System

This is a Student Management System built using the MERN stack (MongoDB, Express, React, Node.js). The application allows for student registration, login and authentication, course enrollment, and an admin dashboard for managing students and courses.

## Features

- **Student Registration Form**: Allows new students to register by providing their details.
- **Login & Authentication**: Secure login for students and admins with JWT authentication.
- **Course Enrollment**: Students can enroll in available courses.
- **Admin Dashboard**: Admins can manage students and courses, view statistics, and perform administrative tasks.

## Project Structure

```
student-management-system
├── backend
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── middleware
│   ├── config
│   ├── server.js
│   └── package.json
├── frontend
│   ├── public
│   ├── src
│   └── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your MongoDB connection in `config/db.js`.

4. Start the server:
   ```
   node server.js
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the React application:
   ```
   npm start
   ```

### Usage

- Access the application in your browser at `http://localhost:3000`.
- Use the registration form to create a new student account.
- Log in with your credentials to access the dashboard and enroll in courses.

## Contributing

Feel free to fork the repository and submit pull requests for any improvements or features you would like to add.

## License

This project is licensed under the MIT License.