const express = require("express")
const stockRoutes = express.Router();
const fs = require('fs');

const filePath = './data/stocks.json';

/* 
Helper function to read json file located at `filePath` 
and return `callback` with jsonData or error.
*/
function jsonReader(filePath, callback) {
  fs.readFile(filePath, 'utf8', (err, jsonData) => {
    if (err) {
      return callback && callback(err);
    }
    try {
      const obj = JSON.parse(jsonData);
      return callback && callback(null, obj);
    } catch(err) {
      return callback && callback(err);
    }
  });
}

/* 
Helper function to write `newData` to json file located at `filePath` 
*/
function jsonWriter(filePath, newData) {
  stringifyData = JSON.stringify(newData, null, 2);
  fs.writeFile(filePath, stringifyData, err => {
    if (err) {
      throw err;
    }
  });
}


module.exports = stockRoutes;
