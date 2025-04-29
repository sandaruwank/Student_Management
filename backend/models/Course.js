const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    instructor: {
        type: String,
        required: true,
    },
    studentsEnrolled: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    }],
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);

module.exports = Course;