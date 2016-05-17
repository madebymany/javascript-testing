const fork = require('child_process').fork
const budo = require('budo')

const b = budo('./main.js')
.on('connect', function (event) {
  fork('./test/integration.js', { env: { URI: event.uri } })
  .on('close', function (code) {
    b.close()
    process.exit(code)
  })
})
