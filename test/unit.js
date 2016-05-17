const test = require('tape')
const main = require('../')

test('a string', function (t) {
  t.plan(1)
  t.equal(main('hello'), 'hello world')
})
