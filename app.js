// Dependencias del servidor
const path = require('node:path');
const express = require('express');
const app = express();

process.loadEnvFile()
const PORT = process.env.PORT || 3000;

//Indicar la ruta de los ficheros estáticos
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile('index.html');
});

app.use((req, res, next) => {
  res.status(404).send('404 - Página no encontrada');
});

//Indicar el puerto de escucha
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});