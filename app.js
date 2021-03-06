function weather() {

    var location = document.getElementById("location");
    var apiKey = 'a2b6fa41455527b9a640096e6cf4b1d1'; 
    var url = 'https://api.darksky.net/forecast/';
  
    navigator.geolocation.getCurrentPosition(success, error);
  
    function success(position) {
      latitude = position.coords.latitude;
      longitude = position.coords.longitude;
  
      location.innerHTML = 'Latitude is ' + latitude + '° <br> Longitude is ' + longitude + '°';
  
       $.getJSON(url + apiKey + "/" + latitude + "," + longitude + "?callback=?", function(data) {
        $('#temp').html(data.currently.temperature + '° F');
        $('#minutely').html(data.minutely.summary);
        $('#TimeZone').html(data.timezone);
       
      });
    }
  
    function error() {
      location.innerHTML = "Unable to retrieve your location";
    }
  
    location.innerHTML = "Locating...";
  }
  
  weather();