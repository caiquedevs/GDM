import { Router } from 'express';

import SpecialtyController from '../controllers/specialty.controller';

const router = Router();

router.post('/specialties', SpecialtyController.storeSpecialty);
router.put('/specialties/:id', SpecialtyController.updateSpecialty);
router.delete('/specialties/:id', SpecialtyController.deleteSpecialty);
router.get('/specialties', SpecialtyController.listAllSpecialtys);
router.get('/specialties/:id', SpecialtyController.showSpecialty);

export default router;
