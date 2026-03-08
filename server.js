const express = require('express');
const path = require('path');

const app = express();

// Server alle statiske filer (HTML, CSS, JS, billeder) fra 'public' mappen
app.use(express.static(path.join(__dirname, 'public')));

// Fallback rute, der sender index.html for roden
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Lyt på den port, som Cloud Run angiver (standard er 8080)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Serveren kører på port ${PORT}`);
});