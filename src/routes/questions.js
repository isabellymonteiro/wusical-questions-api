const express = require('express')
const router = express.Router()
const Question = require('../models/question')

router.get('/', async (req, res) => {
  try {
    const questions = await Question.find()
    res.json(questions)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.get('/amount/:total', async (req, res) => {
  const TOTAL = parseInt(req.params.total)
  console.log(TOTAL)
  let questions
  try {
    questions = await Question.aggregate([{ $sample: { size: TOTAL }}])
  } catch(err) {
    return res.status(500).json({ message: err.message })
  }
  res.json(questions)
})


router.get('/:id', getQuestion, (req, res) => {
  res.json(res.question)
})

router.post('/', async (req, res) => {
  const question = new Question({
    description: req.body.description,
    incorrect_answers: req.body.incorrect_answers,
    correct_answer: req.body.correct_answer,
    hint: req.body.hint,
    translations: {
      en: {
        description: req.body.translations.en.description,
        hint: req.body.translations.en.hint
      }
    }
  })

  try {
    const newQuestion = await question.save()
    res.status(201).json(newQuestion)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

router.patch('/:id', getQuestion, async (req, res) => {
  if (req.body.description) {
    res.question.description = req.body.description
  }
  if (req.body.incorrect_answers) {
    res.question.incorrect_answers = req.body.incorrect_answers
  }
  if (req.body.correct_answer) {
    res.question.correct_answer = req.body.correct_answer
  }
  if (req.body.hint) {
    res.question.hint = req.body.hint
  }
  if (req.body.translations.en.description) {
    res.question.translations.en.description = req.body.translations.en.description
  }
  if (req.body.translations.en.hint) {
    res.question.translations.en.hint = req.body.translations.en.hint
  }
  try {
    const updatedQuestion = await res.question.save()
    res.json(updatedQuestion)
  } catch(err) {
    res.status(400).json({ message: err.message })
  }
})

router.delete('/:id', getQuestion, async (req, res) => {
  try {
    await res.question.remove()
    res.json({ message: 'Deleted question' })
  } catch(err) {
    res.status(500).json({ message: err.message })
  }
})

async function getQuestion(req, res, next) {
  let question
  try {
    question = await Question.findById(req.params.id)
    if (!question) {
      return res.status(404).json({ message: 'Cannot find question' })
    }
  } catch(err) {
    return res.status(500).json({ message: err.message })
  }

  res.question = question
  next()
}

module.exports = router