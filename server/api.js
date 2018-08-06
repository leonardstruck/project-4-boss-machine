const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minionsrouter');
apiRouter.use('/minions', minionsRouter);
const ideasRouter = require('./ideasrouter');
apiRouter.use('/ideas', ideasRouter);
const meetingsRouter = require('./meetingsrouter');
apiRouter.use('/meetings', meetingsRouter);

module.exports = apiRouter;
