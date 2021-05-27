const express = require('express')
// const dbModel = require('./db');
const app = express()
const port = 8000

app.use(express.static('../build'))

const MongoClient = require('mongodb').MongoClient;

// Connection URL
const url = 'mongodb://localhost:27017';
let db;

// Database Name
const dbName = 'eshop';
const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect(function(err) {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log('Connected successfully to server');
    db = client.db(dbName);
  }
  

});


        

app.get('/getBrands', (req, res) => {
     
        // Get the documents collection
        const collection = db.collection('brands');
        // Find some documents
        collection.find({}).toArray(function(err, brands) {
            if (err) {
                console.log(err);
                return ;
            } else {
              
              res.json(brands);
            }
        });    
})

app.get('/getProducts', (req, res) => {
     
  // Get the documents collection
  const collection = db.collection('products');
  // Find some documents
  collection.find({}).toArray(function(err, prods) {
      if (err) {
          console.log(err);
          return ;
      } else {
        
        res.json(prods);
      }
  });    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

