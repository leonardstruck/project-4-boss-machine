const express = require('express');
const meetingsRouter = express.Router();
const db = require('./db');


meetingsRouter.get('/', (req, res, next) => {
  const meetingsArray = db.getAllFromDatabase('meetings');
  res.send(meetingsArray);
});

meetingsRouter.post('/', (req, res, next) => {
  res.status(201).send(db.addToDatabase('meetings', db.createMeeting()));
});

meetingsRouter.delete('/', (req, res, next) => {
  db.deleteAllFromDatabase('meetings');
  res.status(204).send();
})

module.exports = meetingsRouter;
