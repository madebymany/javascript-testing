const test = require('tape')
const Nightmare = require('nightmare')

test('change text', function (t) {
  t.plan(1)
  Nightmare()
  .goto(process.env.URI)
  .click('button')
  .evaluate(function () {
    return document.querySelector('button').innerText
  })
  .end()
  .then(function (text) {
    t.equal(text, 'hello world')
  })
})
