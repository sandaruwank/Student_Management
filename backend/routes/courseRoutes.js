const express = require('express');
const { 
    createCourse, 
    getCourses, 
    getCourseById, 
    updateCourse, 
    deleteCourse 
} = require('../controllers/courseController');

const router = express.Router();

// Route to create a new course
router.post('/', createCourse);

// Route to get all courses
router.get('/', getCourses);

// Route to get a course by ID
router.get('/:id', getCourseById);

// Route to update a course by ID
router.put('/:id', updateCourse);

// Route to delete a course by ID
router.delete('/:id', deleteCourse);

module.exports = router;