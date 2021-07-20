var button= document.querySelector('.button')
var inputValue= document.querySelector('.inputvalue')
var name= document.querySelector('.name')
var desc= document.querySelector('.desc')
var temp= document.querySelector('.temp')

button.addEventListener('click', function (){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&
  appid=771f4017d6098f3a2d947ab695755dca')
  .then(response => response.json())
  .then(data => console.log(data))

  .catch(err => alert("Wrong City Name"))

})
