#!/usr/bin/env node

import {rps, rpsls} from "./lib/rpsls.js";
import minimist from 'minimist';
import express from 'express';

const argv = minimist(process.argv.slice(2));
const port = argv.port || 5000;
const app = express();

app.listen(port);

app.get('/app/', (req, res) => {
	res.status(200).send('200 OK');
})

app.get('/app/rps', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot))).end();
});

app.get('/app/rpsls', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot))).end();
});

app.get('/app/rps/play', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.query.shot))).end();
});

app.post('/app/rps/play/', (req, res) => {
    res.status(200).send(rps(req.body.shot));
})

app.get('/app/rpsls/play/', (req, res) => {
    res.status(200).send(rpsls(req.query.shot));
})

app.post('/app/rpsls/play/', (req, res) => {
    res.status(200).send(rpsls(req.body.shot));
})

app.get('/app/rps/play/:shot', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.params.shot))).end();
});

app.get('/app/rpsls/play/:shot', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.params.shot))).end();
});

app.get('*', (req, res) => {
    res.status(404).send('404 NOT FOUND');
})
