var app = document.querySelector('#app')
app.innerHTML = '<h1>Hola Mundo<span></span></h1>'
appH1 = document.querySelector('#app > h1')
appH1Span = document.querySelector('#app > h1 > span')
app.addEventListener('click', () => {
  if (appH1Span.innerText) {
    appH1Span.style = `
      color: red;
    `
    appH1Span.innerText = "\n Oh! otro click -.-'"
    appH1Span.innerText += '\nEsto lo permite Javascript, no soy Java'
  } else {
    appH1Span.innerText = '\n Oh! un click :D'
    appH1Span.innerText += '\nEsto lo permite Javascript, no soy Java'
  }
  console.log(appH1Span)
})
