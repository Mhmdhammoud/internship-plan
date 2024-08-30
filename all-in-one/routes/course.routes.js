const express = require('express');
const router = express.Router();
const createCourse = require('../controllers/courses/createCourse');
const getAllCourses = require('../controllers/courses/getAllCourses');
const getSingleCourse = require('../controllers/courses/getCourse');
const updateCourse = require('../controllers/courses/updateCourse');
const deleteCourse = require('../controllers/courses/deleteCourse');
const authenticate = require('../middleware/authenticate');
/*
 * CRUD operations
 * Create a course
 * Read all courses
 * Read a single course
 * Update a course
 * Delete a course
 */

// Create a course
router.post('/', createCourse);
router.get('/all', getAllCourses);
router.get('/', getSingleCourse);
router.put('/', updateCourse);
router.delete('/', deleteCourse);

module.exports = router;
