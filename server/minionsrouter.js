const express = require('express');
const minionsRouter = express.Router();
const db = require('./db');

minionsRouter.get('/', (req, res, next) => {
  const minionsArray = db.getAllFromDatabase('minions');
  res.send(minionsArray);
});

minionsRouter.get('/:minionId', (req, res, next) => {
  const minion = db.getFromDatabaseById('minions', req.params.minionId);
  if(!req.params.minionId) {
    res.status(404).send();
  } else if (isNaN(req.params.minionId)) {
    res.status(404).send();
  } else if (!minion){
    res.status(404).send();
  } else {
  res.send(minion);
  }
});

minionsRouter.put('/:minionId', (req, res, next) => {
  const minion = db.getFromDatabaseById('minions', req.params.minionId);
  if(isNaN(req.params.minionId)) {
    res.status(404).send();
  } else if (!req.params.minionId) {
    res.status(404).send();
  } else if (!minion) {
    res.status(404).send();
  } else {
  db.updateInstanceInDatabase('minions', req.body);
  res.send(req.body);
  }
});

minionsRouter.post('/', (req, res, next) => {
  if(req.body.name || req.body.title || req.body.salary) {
  res.status(201).send(db.addToDatabase('minions', req.body));
  }
});

minionsRouter.delete('/:minionId', (req, res, next) => {
  const minion = db.getFromDatabaseById('minions', req.params.minionId);
  if(isNaN(req.params.minionId)) {
    res.status(404).send();
  } else if (!req.params.minionId) {
    res.status(404).send();
  } else if (!minion) {
    res.status(404).send();
  } else {
    if(db.deleteFromDatabasebyId('minions', req.params.minionId)) {
    res.status(204).send();
    }
  }
});

module.exports = minionsRouter;
