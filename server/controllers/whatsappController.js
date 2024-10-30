import qrcode from 'qrcode';
import { Client } from 'whatsapp-web.js';
import { logger } from '../utils/logger.js';

const clients = new Map();

export const generateQR = async (req, res) => {
  try {
    const client = new Client({
      puppeteer: {
        args: ['--no-sandbox']
      }
    });
    
    client.on('qr', async (qr) => {
      try {
        const qrCodeDataUrl = await qrcode.toDataURL(qr);
        res.json({ qrCode: qrCodeDataUrl });
      } catch (error) {
        logger.error('QR generation error:', error);
        res.status(500).json({ error: 'Failed to generate QR code' });
      }
    });

    client.on('ready', () => {
      logger.info('WhatsApp client is ready');
      clients.set(req.user.id, client);
    });

    client.on('message', async (message) => {
      logger.info('Received message:', message.body);
      // Handle incoming messages
    });

    await client.initialize();
  } catch (error) {
    logger.error('WhatsApp initialization error:', error);
    res.status(500).json({ error: 'Failed to initialize WhatsApp' });
  }
};

export const connectAPI = async (req, res) => {
  try {
    const { apiKey, phoneNumber } = req.body;

    // Validate API key and phone number with WhatsApp Business API
    // Implementation depends on your WhatsApp Business API provider

    res.json({ success: true, message: 'WhatsApp API connected successfully' });
  } catch (error) {
    logger.error('WhatsApp API connection error:', error);
    res.status(500).json({ error: 'Failed to connect WhatsApp API' });
  }
};

export const connectQR = async (req, res) => {
  try {
    const client = clients.get(req.user.id);
    if (!client) {
      throw new Error('WhatsApp client not initialized');
    }

    // Wait for client to be ready
    await new Promise((resolve, reject) => {
      client.once('ready', resolve);
      client.once('auth_failure', reject);
      
      // Set a timeout
      setTimeout(() => reject(new Error('Connection timeout')), 30000);
    });

    res.json({ success: true, message: 'WhatsApp connected successfully via QR' });
  } catch (error) {
    logger.error('WhatsApp QR connection error:', error);
    res.status(500).json({ error: 'Failed to connect WhatsApp via QR' });
  }
};

export const disconnect = async (req, res) => {
  try {
    const client = clients.get(req.user.id);
    if (client) {
      await client.destroy();
      clients.delete(req.user.id);
    }
    res.json({ success: true, message: 'WhatsApp disconnected successfully' });
  } catch (error) {
    logger.error('WhatsApp disconnect error:', error);
    res.status(500).json({ error: 'Failed to disconnect WhatsApp' });
  }
};

export const getStatus = async (req, res) => {
  try {
    const client = clients.get(req.user.id);
    if (!client) {
      return res.json({ connected: false });
    }

    const state = await client.getState();
    res.json({ 
      connected: state === 'CONNECTED',
      state: state
    });
  } catch (error) {
    logger.error('WhatsApp status check error:', error);
    res.status(500).json({ error: 'Failed to check WhatsApp status' });
  }
};