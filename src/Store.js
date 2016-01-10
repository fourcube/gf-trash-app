import {Promise, post} from './vendor/promise'

export default {
  data: {
    question: {
      id: 1,
      title: 'Ist das wirklich Vitamine?',
      text: 'Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...Habe mich gefragt...'
    },
    updatePending: false
  },
  voteStupid (question) {
    this.data.updatePending = true
    post('/stupid', {id: question.id}).then((error, text, xhr) => {
      if (error) {

      }
    })
    this.data.updatePending = false
  },
  nextQuestion () {
    var p = new Promise()

    this.data.updatePending = true

    setTimeout(() => {
      p.done(null, null)
    }, 1000)

    p.then(() => {
      this.data.question = {
        title: 'Foo',
        text: 'Bar'
      }
      this.data.updatePending = false
    })
  }
}
