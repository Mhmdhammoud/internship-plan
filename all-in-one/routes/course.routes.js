const express = require('express');
const router = express.Router();
const createCourse = require('../controllers/createCourse');
const getAllCourses = require('../controllers/getAllCourses');
const getSingleCourse = require('../controllers/getCourse');
const updateCourse = require('../controllers/updateCourse');
const deleteCourse = require('../controllers/deleteCourse');
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
