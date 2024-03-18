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


// API to read and return stocks data from stocks.json
stockRoutes.get('/stocks', (req, res) => {
  jsonReader(filePath, (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    }
    res.send(data);
  });
});

// API to return unique tags used for filtering stocks on UI
stockRoutes.get('/tags', (req, res) => {
  jsonReader(filePath, (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      let tags = data.map((obj) => {
        return obj.tag.toLowerCase();
      });
      let uniqueTags = new Set(tags);
      console.log(uniqueTags);
      res.send([...uniqueTags]);
    }
  });
});

// API to delete stock from json with `id`
stockRoutes.delete('/stocks/:id', (req, res) => {
  // Check if id is not null
  const id = req.params.id;
  if (!id) {
    return res.status(404);
  }
  // Read json file
  jsonReader(filePath, (err, data) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      // Find if json has 
      let newData = data.filter(obj =>  obj.id != id);
      if (data.length == newData.length) {
        return res.status(404).send({
          "msg": `Stock with ${id} not found!`
        });
      }
      jsonWriter(filePath, newData);
      res.status(200).send({
        "msg": `Stock ${id} deleted!`
      });
    }
  });
});

// API to reset json file and copy data from master file.
stockRoutes.post('/reset', (req, res) => {
  const masterfilePath = './data/stocks-master.json';
  jsonReader(masterfilePath, (err, data) => {
    if (err) {
      console.log(err);
      throw err;
    } else {
      jsonWriter(filePath, data);
      res.status(200).send({
        "msg": `Stock data updated!`
      });
    }
  });
});

module.exports = stockRoutes;
