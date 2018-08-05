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

module.exports = minionsRouter;
