const express = require('express');
const ideasRouter = express.Router();
const db = require('./db');


ideasRouter.get('/', (req, res, next) => {
  const ideasArray = db.getAllFromDatabase('ideas');
  res.send(ideasArray);
});

ideasRouter.get('/:ideaId', (req, res, next) => {
  const idea = db.getFromDatabaseById('ideas', req.params.ideaId);
  if(!req.params.ideaId) {
    res.status(404).send();
  } else if (isNaN(req.params.ideaId)) {
    res.status(404).send();
  } else if (!idea){
    res.status(404).send();
  } else {
  res.send(idea);
  }
});

module.exports = ideasRouter;
