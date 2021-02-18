import { Router } from 'express';
import HorseController from '../controllers/HorseController';

const router = Router();
const horseController = new HorseController();

/*
* create new horse 
*/
router.post('/', horseController.post);

/*
* get list of all horses 
*/
router.get('/', horseController.get);

/*
* update record of single horse
*/
router.put('/:id', horseController.update);

/*
* delete record of single horse
*/
router.delete('/:id', horseController.delete);

/*
* update status of monitoring
*/
router.put('/monitor/:id', horseController.monitor);

export default router;