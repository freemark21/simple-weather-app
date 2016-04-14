$(function() {
    
    function getWeather(zipcode, apikey){
        $.getJSON('//api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial&APPID=' + apikey)
        .done(function(data){
            $('#weather').append('<p>The temp is ' + data.main.temp + ' degrees farenheit</p>');
            $('#weather').append('<p>' + data.weather[0].description + '</p>');
        }).fail(function(){
            alert('Something went wrong. Please check your zip code and api key.');
        });
    };
      
    
$('#submit').on('click', function(){
    var zip = $('#zip').val();
    var api = $('#api').val();
    getWeather(zip, api);
});
   
});
