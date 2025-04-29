import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [students, setStudents] = useState([]);
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetchStudents();
        fetchCourses();
    }, []);

    const fetchStudents = async () => {
        try {
            const response = await axios.get('/api/students');
            setStudents(response.data);
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const fetchCourses = async () => {
        try {
            const response = await axios.get('/api/courses');
            setCourses(response.data);
        } catch (error) {
            console.error('Error fetching courses:', error);
        }
    };

    return (
        <div className="admin-dashboard">
            <h1>Admin Dashboard</h1>
            <h2>Students</h2>
            <ul>
                {students.map(student => (
                    <li key={student._id}>{student.name} - {student.email}</li>
                ))}
            </ul>
            <h2>Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course._id}>{course.title} - {course.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;