const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');


// GET todas las películas
router.get('/', (req, res) => {
    Movie.find()
    .then( movies => res.json(movies))
    .catch( error => {
        console.error('Error en GET /', error);
        res.status(500).json('Ha ocurrido un error en el servidor')
    })
})

//GET película por id
router.get('/:id', (req, res) => {
    const movieId = req.params.id;
    Movie.findById(movieId)
    .then(movies => res.json(movies))
    .catch( error => {
        console.error('Error en GET /:id', error);
        res.status(500).json('Ha ocurrido un error en el servidor')
    })
})

//GET película por título
router.get('/title/:title', (req, res) => {
    const movieTitle = req.params.title;
    return Movie.find({title: movieTitle})
    .then(movies => res.json(movies))
    .catch( error => {
        console.error('Error en GET /title', error);
        return res.status(500).json('Ha ocurrido un error en el servidor')
    })
})

// GET películas por género
router.get('/genre/:genre', (req, res) => {
    const movieGenre = req.params.genre;
    return Movie.find({genre: generoSolicitado})
    .then(movies => res.json(movies))
    .catch( error => {
        console.error('Error en GET /:id', error);
        res.status(500).json('Ha ocurrido un error en el servidor')
    })
})

//GET películas de años posteriores al indicado 
router.get('/newerthan/:year', (req, res) => {
    const movieYear = req.params.year;
    return Movie.find({year: {$gt: movieYear}})
    .then(movies => res.json(movies))
    .catch( error => {
        console.error('Error en GET /:id', error);
        res.status(500).json('Ha ocurrido un error en el servidor')
    })
})


module.exports = router;