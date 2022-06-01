const weather =  {
 apiKey: "8965d0825b1fa984984dd80c7c3c5ade",
 fetchWeather : function(city){
     fetch("https://api.openweathermap.org/data/2.5/weather?q= "+city + "&appid="+this.apiKey)
     .then((response) =>response.json())
     .then((data) =>this.displayWeather(data))
 },


 displayWeather : function(data){
      const {name} = data;
      const {icon , description ,} = data.weather[0];
      const {temp , humidity} = data.main;
      const {speed} = data.wind;
      // console.log(name , icon , description , temp ,humidity ,speed);

      document.querySelector(".city").innerText = `weather in ${name}`;
    //   let a = document.querySelector(".icon").src = "http://openweathermap.org/img/wn/"+icon+".png";
      
      
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = `${temp} °C`;
      document.querySelector(".humidity").innerText = ` humidity ${humidity}%`;
      document.querySelector(".wind").innerText = `wind speed ${speed} km/h`

      document.querySelector(".weather").classList.remove("loading");
       
      

 },

 search:function(){
     this.fetchWeather(document.querySelector(".search-bar").value)
 }

}

var a = 1;
document.querySelector(".icon").addEventListener("click",function(){
   weather.search();
   document.body.style.backgroundImage = "url('https://source.unsplash.com/random/800x800/?img="+ a +" ')";
   document.querySelector(".search-bar").value = "";
   a++;
})

document.querySelector(".search-bar").addEventListener("keyup" , function(event){
  if(event.key == "Enter"){
    weather.search();  
  document.querySelector(".search-bar").value = "";
  document.body.style.backgroundImage = "url('https://source.unsplash.com/random/800x800/?img="+ a +" ')";
  a++;
  // console.log(a);
  }
  
})

weather.fetchWeather("Wazirabad");

