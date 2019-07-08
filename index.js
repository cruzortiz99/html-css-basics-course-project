// @ts-check
var preview = document.getElementById('preview')
var navHtml01 = document.getElementById('html-01')
var navHtml02 = document.getElementById('html-02')
var navHtml03 = document.getElementById('html-03')
var navHtml04 = document.getElementById('html-04')
var navHtml05 = document.getElementById('html-05')
var navHtml06 = document.getElementById('html-06')
var navHtml07 = document.getElementById('html-07')
var navHtml08 = document.getElementById('html-08')
var navHtml09 = document.getElementById('html-09')
var navHtml10 = document.getElementById('html-10')
var navCss01 = document.getElementById('css-01')
var navCss02 = document.getElementById('css-02')
var navCss03 = document.getElementById('css-03')
var navCss04 = document.getElementById('css-04')
var navCss05 = document.getElementById('css-05')
var navCss06 = document.getElementById('css-06')
var navCss07 = document.getElementById('css-07')
var navCss08 = document.getElementById('css-08')
var navCss09 = document.getElementById('css-09')
var navCss10 = document.getElementById('css-10')
var navCss11 = document.getElementById('css-11')
var navCss12 = document.getElementById('css-12')

navHtml01.addEventListener('click', (event) => {
  preview.setAttribute('src', './html-practice/01-css_js/css_js.html')
})
navHtml02.addEventListener('click', (event) => {
  preview.setAttribute('src', './html-practice/02-divs/div.html')
})
navHtml03.addEventListener('click', (event) => {
  preview.setAttribute('src', './html-practice/03-layouts/layout.html')
})
navHtml04.addEventListener('click', (event) => {
  preview.setAttribute('src', './html-practice/04-header/headers.html')
})
navHtml05.addEventListener('click', (event) => {
  preview.setAttribute('src', './html-practice/05-parrafos/parrafos.html')
})
navHtml06.addEventListener('click', (event) => {
  if (preview.getAttribute('src') === './html-practice/06-imagenes/img.html') {
    preview.setAttribute('src', './html-practice/06-imagenes/img2.html')
  } else {
    preview.setAttribute('src', './html-practice/06-imagenes/img.html')
  }
})
navHtml07.addEventListener('click', (event) => {
  preview.setAttribute('src', './html-practice/07-audio/audio.html')
})
navHtml08.addEventListener('click', (event) => {
  if (preview.getAttribute('src') === './html-practice/08-videos/video.html') {
    preview.setAttribute('src', './html-practice/08-videos/video2.html')
  } else {
    preview.setAttribute('src', './html-practice/08-videos/video.html')
  }
})
navHtml09.addEventListener('click', (event) => {
  preview.setAttribute('src', './html-practice/09-formularios/formularios.html')
})
navHtml10.addEventListener('click', (event) => {
  if (preview.getAttribute('src') === './html-practice/10-tablas/tablas.html') {
    preview.setAttribute('src', './html-practice/10-tablas/tablas2.html')
  } else {
    preview.setAttribute('src', './html-practice/10-tablas/tablas.html')
  }
})
// CSS
navCss01.addEventListener('click', (event) => {
  preview.setAttribute('src', './html-practice/01-css_js/css_js.html')
})
navCss02.addEventListener('click', (event) => {
  preview.setAttribute('src', './html-practice/02-divs/div.html')
})
navCss03.addEventListener('click', (event) => {
  preview.setAttribute('src', './html-practice/03-layouts/layout.html')
})
navCss04.addEventListener('click', (event) => {
  preview.setAttribute('src', './html-practice/04-header/headers.html')
})
navCss05.addEventListener('click', (event) => {
  preview.setAttribute('src', './html-practice/05-parrafos/parrafos.html')
})
navCss06.addEventListener('click', (event) => {
  if (preview.getAttribute('src') === './html-practice/06-imagenes/img.html') {
    preview.setAttribute('src', './html-practice/06-imagenes/img2.html')
  } else {
    preview.setAttribute('src', './html-practice/06-imagenes/img.html')
  }
})
navCss07.addEventListener('click', (event) => {
  preview.setAttribute('src', './html-practice/07-audio/audio.html')
})
navCss08.addEventListener('click', (event) => {
  if (preview.getAttribute('src') === './html-practice/08-videos/video.html') {
    preview.setAttribute('src', './html-practice/08-videos/video2.html')
  } else {
    preview.setAttribute('src', './html-practice/08-videos/video.html')
  }
})
navCss09.addEventListener('click', (event) => {
  preview.setAttribute('src', './html-practice/09-formularios/formularios.html')
})
navCss10.addEventListener('click', (event) => {
  if (preview.getAttribute('src') === './html-practice/10-tablas/tablas.html') {
    preview.setAttribute('src', './html-practice/10-tablas/tablas2.html')
  } else {
    preview.setAttribute('src', './html-practice/10-tablas/tablas.html')
  }
})
navCss11.addEventListener('click', (event) => {
  preview.setAttribute('src', './html-practice/09-formularios/formularios.html')
})
navCss12.addEventListener('click', (event) => {
  preview.setAttribute('src', './html-practice/09-formularios/formularios.html')
})
