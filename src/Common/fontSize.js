fontResize()
window.onresize = function () {
  fontResize()
}
function fontResize () {
  var deviceWidth = document.documentElement.clientWidth || window.innerWidth
  let screenHeight = window.innerHeight
  if (deviceWidth >= 750) {
    deviceWidth = 750
  }
  if (deviceWidth <= 320) {
    deviceWidth = 320
  }
  document.querySelector('body').style.height = screenHeight + 'px'
  document.documentElement.style.fontSize = (deviceWidth / 7.5) + 'px'
}
