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

ideasRouter.put('/:ideaId', (req, res, next) => {
  const idea = db.getFromDatabaseById('ideas', req.params.ideaId);
  if(isNaN(req.params.ideaId)) {
    res.status(404).send();
  } else if (!req.params.ideaId) {
    res.status(404).send();
  } else if (!idea) {
    res.status(404).send();
  } else {
  db.updateInstanceInDatabase('ideas', req.body);
  res.send(req.body);
  }
});

ideasRouter.post('/', (req, res, next) => {
  if(req.body.name || req.body.description || req.body.numWeeks || req.body.weeklyRevenue) {
  res.status(201).send(db.addToDatabase('ideas', req.body));
  }
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
  const idea = db.getFromDatabaseById('ideas', req.params.ideaId);
  if(isNaN(req.params.ideaId)) {
    res.status(404).send();
  } else if (!req.params.ideaId) {
    res.status(404).send();
  } else if (!idea) {
    res.status(404).send();
  } else {
    if(db.deleteFromDatabasebyId('ideas', req.params.ideaId)) {
    res.status(204).send();
    }
  }
});

module.exports = ideasRouter;
