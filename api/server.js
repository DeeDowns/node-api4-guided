const express = require('express');
const helmet = require('helmet');

const apiRouter = require('./api-router.js');

const server = express();

server.use(helmet());

server.use('/api', apiRouter);
server.use('/greet/:name', (req, res) => {
    const greeting = process.env.GREETING || 'hello'
    res.status(200).send(`<h1>${greeting} ${req.params.name}</h1>`)
})
server.use('/goodbye/:name', (req, res) => {
    const bye = process.env.BYE || 'bye' 
    res.status(200).send(`<h1>${bye} ${req.params.name}</h1>`)
})

module.exports = server;
