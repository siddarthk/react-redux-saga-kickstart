const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const { createProxyMiddleware } = require('http-proxy-middleware');

const APIRouter = require('./api/APIRouter');
const ActuatorRouter = require('./ActuatorRouter');

require('dotenv').config();

const httpServer = http.createServer(app);
const router = express.Router();

const config = {
  SERVER_PORT : process.env.SERVER_PORT,
  API_URL : process.env.API_URL,
}

const handleProxyRequest = async (proxyReq, req, res ) => {
  console.log('pre hanlde');
}

const handleProxyError = async (err, req, res, target ) => {
  console.log('proxy error', err);
  res.end('something wrong');
}

const options = {
  target: config.API_URL,
  pathRewrte: { '^/api': ''},
  changeOrigin: true,
  onError: handleProxyError,
  onProxyReq: handleProxyRequest
}

const apiProxy = createProxyMiddleware(options);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.use('/actuator', ActuatorRouter);
app.use('/mock', APIRouter);
app.use('/api', apiProxy);

console.table(config);

httpServer.listen(config.SERVER_PORT);