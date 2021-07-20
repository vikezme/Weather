var button= document.querySelector('.button')
var inputValue= document.querySelector('.inputvalue')
var name= document.querySelector('.name')
var desc= document.querySelector('.desc')
var temp= document.querySelector('.temp')

button.addEventListener('click', function (){
  fetch('https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}')
  .then(response => response.json())
  .then(data => console.log(data))

  .catch(err => alert("Wrong City Name"))

})
