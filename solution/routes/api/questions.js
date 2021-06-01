/**
 * This is where you will create routes for our
 * questions API
 * Base url: /api/questions
 * We have imported express and router and
 * exported the router. 
 * 
 * Your task is to fill in the router with appropriate
 * routes and implement the functionality of getting
 * data from mongodb and return appropriate results
 */

const express = require('express');
const router = express.Router();

// Questions model
const Questions = require('../../models/Questions');
// Hint: get a bonus task here
const shuffleArray = require('../../utils/shuffle');


/**
 * Route details
 * api GET /api/questions
 * Description: Get all questions in the database
 * IMPORTANT: remove the answers from it's data
 * we don't want the client to know the answer.
 * 
 * Structure of the return JSON:
 * [
 *    {
 *      question: 'sample question',
 *      options: [
 *        'option1',
 *        'option2'
 *      ],
 *      id: '1234'
 *    }
 * ]
 * 
 */
router.get('/', (req, res) => {
  Questions.find()
  .then(items => {
    res.json(items.map(item => ({
      question: item.question,
      options: shuffleArray(item.options),
      id: item._id
    })))
  })
})

/**
 * Route details
 * api GET /api/questions/count
 * Description: This will get the count of the questions
 * from the database and return it 
 * Structure of the return JSON:
 * {
 *  count: 4
 * }
 */
router.get('/count', (req, res) => {
  Questions.find()
    .then(items => {
      res.status(200).json({
        count: items.length,
        ids: items.map(item => item._id)
      })
    })
})

/**
 * Route details
 * api GET /api/questions/:qId
 * Description: This will get one question given the question ID
 * Structure of the return JSON:
 * {
 *    question: 'sample question',
 *    options: [
 *      'option1',
 *      'option2'
 *    ],
 *    id: '1234'
 * }
 */
router.get('/:qId', (req, res) => {
  Questions.findById(req.params.qId).then(item => {
    res.json({
      question: item.question,
      options: shuffleArray(item.options),
      id: item._id
    })
  })
})


/**
 * Route details
 * api POST /api/questions/result
 * Description: This will receive a body with user
 * entered answers and will return the results. 
 * Calculation of the result will happen here and you
 * would only send the results.
 * 
 * Structure of body JSON:
 * {
 *    'questionID': 'user-answer',
 *    'questionID': 'user-answer'
 * }
 * 
 * Structure of the return JSON:
 * {
 *    summary: 'passed OR failed',
 *    score: (how many answers were correct),
 *    total: (how many questions were there)
 * }
 */
router.post('/result', (req, res) => {

  Questions.find()
  .then(questions => {
    const resultJSON = {
      summary: 'failed',
      score: 0,
      total: questions.length
    }
    questions.forEach(question => {
      if(req.body[question._id] === question.answer) {
        resultJSON.score++
      }
    })

    if(resultJSON.score > questions.length / 2) {
      resultJSON.summary = 'passed'
    }
    res.json(resultJSON)
  })
})


module.exports = router;
