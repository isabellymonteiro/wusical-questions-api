const mongoose = require('mongoose')

const questionSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  incorrect_answers: {
    type: [String],
    required: true
  },
  correct_answer: {
    type: String,
    required: true
  },
  hint: {
    type: String,
    required: true,
    default: 'Não disponível'
  },
  translations: {
    en: {
      description: {
        type: String,
        required: true
      },
      hint: {
        type: String,
        required: true,
        default: 'Not available'
      },
    }
  }
})

module.exports = mongoose.model('Question', questionSchema)