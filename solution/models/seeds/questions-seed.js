const seeder = require('mongoose-seed');

const db = require('../../config/keys').mongoURI;
const data = require('./questions-data.json');

seeder.connect(db, function() {
  seeder.loadModels(['models/Questions.js'])
  seeder.clearModels(['questions'], function(){
    seeder.populateModels(data, function(err, done) {
      if(err) {
        console.error('Error seeding models', err);
      }
      if(done) {
        console.log('Seeded content successfully', done)
      }
      seeder.disconnect()
    })
  })
})