const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');
const authMiddleware = require('../middleware/authMiddleware');

// Route to register a new student
router.post('/register', studentController.registerStudent);

// Route to get all students
router.get('/', authMiddleware.verifyAdmin, studentController.getAllStudents);

// Route to get a student by ID
router.get('/:id', authMiddleware.verifyAdmin, studentController.getStudentById);

// Route to update a student's information
router.put('/:id', authMiddleware.verifyAdmin, studentController.updateStudent);

// Route to delete a student
router.delete('/:id', authMiddleware.verifyAdmin, studentController.deleteStudent);

module.exports = router;