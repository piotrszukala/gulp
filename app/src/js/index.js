
window.onload = function () {
  var element = document.createElement('h2');
  var text = document.createTextNode('Hello from js');
  element.appendChild(text);
  document.body.appendChild(element)
};