const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minionsrouter');
apiRouter.use('/minions', minionsRouter);
const ideasRouter = require('./ideasrouter');
apiRouter.use('/ideas', ideasRouter);

module.exports = apiRouter;
 
