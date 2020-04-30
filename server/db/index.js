const mongoose = require('mongoose');
const seed = require('./seeder.js');

mongoose.connect('mongodb://localhost/reviews', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connection to database successful!');
  const reviewSchema = new mongoose.Schema({
    gameId: Number,
    date: { type: Date, default: Date.now },
    overall: Number,
    title: String,
    review: String,
    recommend: Boolean,
    nickname: String,
    location: String,
    email: String,
    buyForSelf: Boolean,
    ageBracket: Number,
    gender: Number,
    graphics: Number,
    gameplay: Number,
    appeal: Number,
    ownershipBracket: Number,
    purchaseOnline: Boolean,
    readReviews: Boolean,
    recommendBGS: Number,
    meta: {
      helpful: Number,
      unhelpful: Number,
    },
  });

  const Review = mongoose.model('Review', reviewSchema);

  // UNCOMMENT BELOW TO DROP COLLECTION AND RESEED DATA
  //
  // mongoose.connection.db.dropCollection('reviews', (err) => {
  //   if (err) {
  //     console.log(err);
  //     return;
  //   }
  //   seed.seed(Review, 100);
  // });
});

module.exports.db = db;
