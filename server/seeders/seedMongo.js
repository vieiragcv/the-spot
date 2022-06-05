const faker = require('faker');
const MongoClient = require('mongodb').MongoClient;
const { User } = require('../models');
const userSeeds = require('./userSeed.json');

async function seedDB() {
  const uri = 'mongodb+srv://vieiragcv:IvtecK24@testingapps.7w19k.mongodb.net/the-spot-group?retryWrites=true&w=majority';

  const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  try {
    await client.connect();
    console.log('Connected correctly to server');
    const collection = client.db('the-spot-group').collection('users');
    collection.insertMany(userSeeds);
    console.log('Database seeded! Finally!');
    client.close();
  }

  catch (err) {
    console.log(err.stack);
  }
}

seedDB();



