const express  = require('express');
const { now } = require('lodash');
const ActuatorRouter = express.Router();

ActuatorRouter.get('/keepalive', (req, res) => {
  res.status(200).json({'status': 'alive'});
});

ActuatorRouter.get('/info', (req, res) => {
  res.status(200).json({'name': 'Server', 'build': '0.0.1', 'date': now()});
});

ActuatorRouter.get('/', (req, res) => {
  res.status(200).json({'keepalive': '/keepalive', 'info': '/info'});
});

module.exports = ActuatorRouter;