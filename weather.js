var button= document.querySelector('.button')
var inputValue= document.querySelector('.inputvalue')
var name= document.querySelector('.name')
var desc= document.querySelector('.desc')
var temp= document.querySelector('.temp')

button.addEventListener('click', function (){
  fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=771f4017d6098f3a2d947ab695755dca')
  .then(response => response.json())
  .then(data => this.displayWeather(data))

  .catch(err => alert("Wrong City Name"))

  console.log(alert);
})


const displayWeather= function(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  console.log(name, icon, description, temp, humidity, speed);
  document.querySelector(".city").innerText = "Weather in" + name;
  document.querySelector(".icon").src ="http://openweathermap.org/img/wn/" + icon + "01n@2x.png"
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = temp + "°C";
  document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
  document.querySelector(".wind").innerText = "Wind Speed:" + speed + "km/h";
  document.querySelector(".weather").classList.remove("loading");
};

//  const search= function (){
//    this.fetchWeather(document.querySelector(".inputvalue").value);
  //}

//document.querySelector(".button").addEventListener("click", function() {
//  search();
//});
//document.querySelector(".inputvalue").addEventListener("keyup", function (event){
  //if(event.key == "Enter"){
  //  search();
  //}
//})
