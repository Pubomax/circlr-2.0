import express from 'express';
import { protect } from '../middleware/auth.js';
import {
  generateQR,
  connectAPI,
  connectQR,
  disconnect,
  getStatus
} from '../controllers/whatsappController.js';

const router = express.Router();

router.use(protect);

router.get('/qr', generateQR);
router.post('/connect/api', connectAPI);
router.post('/connect/qr', connectQR);
router.post('/disconnect', disconnect);
router.get('/status', getStatus);

export default router;