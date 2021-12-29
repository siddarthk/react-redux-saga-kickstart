const express = require('express');
const fs = require('fs');
const APIRouter = express.Router();
const path = require('path');

APIRouter.get('/session', async (req, res) => {
  res.status(200).send(await getData('session.json'));
});

async function getData(file) {
  try {
    const filepath = path.join(__dirname, `/data/${file}`);
    const data = JSON.parse(fs.readFileSync(filepath));
    return data;
  } catch (e) {
    console.log(e);
  }
};

async function getFile(file) {
  try {
    const filepath = path.join(__dirname, `/data/${file}`);
    const file = fs.readFileSync(filepath);
    return file;
  } catch (e) {
    console.log(e);
  }
};

module.exports = APIRouter;