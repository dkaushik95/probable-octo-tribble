const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuestionsSchema = new Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true
  },
  answer: {
    type: String,
    required: true
  }
})

module.exports = Questions = mongoose.model('questions', QuestionsSchema, 'questions');