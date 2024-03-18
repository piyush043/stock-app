const express = require("express")
const stockRoutes = express.Router();
const fs = require('fs');

const filePath = './data/stocks.json';


module.exports = stockRoutes;
