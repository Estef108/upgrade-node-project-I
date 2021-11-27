require('./db/db');

const express = require('express');
const server = express();
const PORT = 3000;
const moviesRouter = require('./router/movies.router');



server.use('/movies', moviesRouter);


server.use('*', (req, res) => {
    res.status(404).json('Not found');
})

server.listen(PORT, () => {
    console.log(`Servidor arrancado en puerto ${PORT}`);
})




