// Import library express
const express = require('express');

// Inisialisasi server
const app = express();

// Definisi endpoint untuk API
app.get('/api/service', (req, res) => {
  res.send('Halo ini Service 3');
});

// Menjalankan server di port 3002
const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Server Service 3 berjalan di http://localhost:${PORT}`);
});