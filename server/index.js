import express from 'express';
import { SuiClient, getFullnodeUrl } from '@mysten/sui.js';

const app = express();
app.use(express.json());

// Initialize Sui client
const suiClient = new SuiClient({ url: getFullnodeUrl('testnet') });

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Sui DeFi Casino Backend Server')
})

// Start server
const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
