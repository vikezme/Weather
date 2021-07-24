var button= document.querySelector('.btn-search')
var inputValue= document.querySelector('.inputvalue')
var name= document.querySelector('.name')
var desc= document.querySelector('.desc')
var temp= document.querySelector('.temp')

button.addEventListener('click', function (){
  fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=771f4017d6098f3a2d947ab695755dca')
  .then(response => response.json())
  .then(data => displayWeather(data))

  .catch(err => alert("Wrong City Name"))

  console.log();
})


const displayWeather= function(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  console.log(name, icon, description, temp, humidity, speed);
  document.querySelector(".city").innerText = name;
  document.querySelector(".icon").src ="http://openweathermap.org/img/wn/01n@2x.png"
  document.querySelector(".description").innerText = description;
  document.querySelector(".temp").innerText = temp + "°C";
  document.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
  document.querySelector(".wind").innerText = "Wind Speed:" + speed + "km/h";
  document.querySelector(".weather").classList.remove("loading");
};
const search= function (){
  (document.querySelector(".inputvalue").value);
  }
document.querySelector(".btn-search").addEventListener("click", function() {
  search();
});



const history = document.getElementById("history")

button.onClick = function (){
  const key = history.value;
  const value = inputvalue.value;
  console.log(key);
  console.log(value);
  if(key && value){
    localStorage.setItem(key, value);
    location.reload();
  }
};

for (let i = 0; i < localStorage.length; i++) {
  const key = localStorage.key(i);
const value = localStorage.getItem(key);
  history.innerHTML += `${key}: ${value}<br />`
}
