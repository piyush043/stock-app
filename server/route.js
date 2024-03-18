const express = require("express");
const router = express.Router();
const fs = require('fs');
const stockRoutes = require('./stock.js');

router.use(stockRoutes);
module.exports = router;
