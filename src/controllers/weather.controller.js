// src/controllers/weather.controller.js
const { fetchCurrentWeatherByCity } = require('../services/weather.service');

async function getByCity(req, res, next) {
    try {
        const city = req.query.city || 'palangkaraya'; // <-- BENAR
        const apikey = process.env.OWM_API_KEY;

        const data = await fetchCurrentWeatherByCity(city, apikey);
        res.json(data);
    } catch (err) {
        next(err);
    }
}

module.exports = { getByCity };