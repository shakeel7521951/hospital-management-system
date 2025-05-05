import express from 'express';
import { createAppointment, getAllAppointments } from "../controller/appointmentController.js";
import auth from '../middleware/AuthMiddleWare.js';
const router = express.Router();

router.post("/create-appointment",auth,createAppointment);
router.post("/all-appointments",auth,getAllAppointments);

export default router;