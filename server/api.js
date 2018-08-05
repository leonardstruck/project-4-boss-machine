const express = require('express');
const apiRouter = express.Router();

const minionsRouter = require('./minionsrouter');
apiRouter.use('/minions', minionsRouter);


module.exports = apiRouter;
