const main = require('./')

const button = document.createElement('button')
button.addEventListener('click', function () {
  button.innerText = main('hello')
})
document.body.appendChild(button)
