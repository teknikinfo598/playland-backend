const pool = require('../models/db');

const getTickets = async (req, res) => {
  const result = await pool.query('SELECT * FROM tickets');
  res.json(result.rows);
};

const createTicket = async (req, res) => {
  const { cihaz_ad, ariza_detay } = req.body;
  const result = await pool.query(
    'INSERT INTO tickets (cihaz_ad, ariza_detay, durum) VALUES ($1, $2, $3) RETURNING *',
    [cihaz_ad, ariza_detay, 'Açık']
  );
  res.json(result.rows[0]);
};

module.exports = { getTickets, createTicket };
