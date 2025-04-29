import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CourseEnrollment = () => {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await axios.get('/api/courses');
                setCourses(response.data);
            } catch (error) {
                console.error('Error fetching courses:', error);
            }
        };

        fetchCourses();
    }, []);

    const handleEnroll = async () => {
        try {
            const response = await axios.post('/api/enroll', { courseId: selectedCourse });
            setMessage(response.data.message);
        } catch (error) {
            console.error('Error enrolling in course:', error);
            setMessage('Enrollment failed. Please try again.');
        }
    };

    return (
        <div>
            <h2>Course Enrollment</h2>
            <select onChange={(e) => setSelectedCourse(e.target.value)} value={selectedCourse}>
                <option value="">Select a course</option>
                {courses.map((course) => (
                    <option key={course._id} value={course._id}>
                        {course.name}
                    </option>
                ))}
            </select>
            <button onClick={handleEnroll} disabled={!selectedCourse}>
                Enroll
            </button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default CourseEnrollment;