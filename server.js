const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const ticketRoutes = require('./routes/tickets');

app.get('/', (req, res) => {
  res.send('Merhaba Playland!');
});

app.use('/api/ariza', ticketRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Sunucu ${PORT} portunda çalışıyor`));
