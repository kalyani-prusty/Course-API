import express, { Router } from 'express';
import { addCourse, deleteCorse, getAllCources, getCourceById, updateCourse } from '../controllers/courses.js';

const router = Router();


router.get('/courses',getAllCources);
router.post('/addCourse',addCourse);
router.get('/course/:id',getCourceById);
router.put('/updateCourse/:id',updateCourse);
router.delete('/deleteCourse/:id',deleteCorse);

export default router;