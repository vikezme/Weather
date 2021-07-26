var button= document.querySelector('.btn-search')
var inputValue= document.querySelector('.inputvalue')
var name= document.querySelector('.name')
var desc= document.querySelector('.desc')
var temp= document.querySelector('.temp')

button.addEventListener('click', function (){
  fetch('http://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+"&units=metric"+'&appid=771f4017d6098f3a2d947ab695755dca')

  .then(response => response.json())
  .then(data => displayWeather(data))

  .catch(err => alert("Wrong City Name"))
  fetch('http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+"&units=metric"+'&appid=771f4017d6098f3a2d947ab695755dca')

  .then(response => response.json())
  .then(data => displayForecast(data))

  console.log();
})


function showWeather(ref, data) {
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  const { icon, description } = data.weather[0];
  ref.querySelector(".temp").innerText = temp + "°C";
  ref.querySelector(".humidity").innerText = "Humidity:" + humidity + "%";
  ref.querySelector(".wind").innerText = "Wind Speed:" + speed + "km/h";
  ref.querySelector(".date").innerText = (new Date(data.dt*1000)).toDateString();
  ref.querySelector(".icon").src ="http://openweathermap.org/img/wn/"+icon+"@2x.png"
}


const displayWeather= function(data) {
  const { name } = data;
  const { icon, description } = data.weather[0];
  const { temp, humidity } = data.main;
  const { speed } = data.wind;
  console.log(name, icon, description, temp, humidity, speed);
  console.log(data);

  document.querySelector(".city").innerText = name;
  document.querySelector(".description").innerText = description;
  document.querySelector(".weather").classList.remove("loading");
  showWeather(document.querySelector("#mainitem"), data);
  document.getElementById("history").innerHTML += `${name} <br/>`; };


  const displayForecast= function(data) {

    for(var i = 0; i < 5; ++i) {
      showWeather(document.querySelector("#item"+(i+1)), data.list[i*8+7]);
    }
    console.log(data);
   };



const search= function (){
  (document.querySelector(".inputvalue").value);
  }
document.querySelector(".btn-search").addEventListener("click", function() {
  search();
});
