const test = require('tape')
const main = require('../../app/assets/javascripts/index')

test('a string', function (t) {
  t.plan(1)
  t.equal(main('hello'), 'hello world')
})
