
import { Router } from 'express';
import { realizarSaque } from '../controller/atmController';

const router = Router();

router.post('/saque', realizarSaque);

export default router;
