import { Router } from 'express';

import DoctorController from '../controllers/doctor.controller';

const router = Router();

router.post('/doctors', DoctorController.storeDoctor);
router.put('/doctors/:id', DoctorController.updateDoctor);
router.delete('/doctors/:id', DoctorController.deleteDoctor);
router.get('/doctors', DoctorController.listAllDoctors);
router.get('/doctors/:id', DoctorController.showDoctor);

export default router;
