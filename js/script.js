$(function() {
    var apiKey = "7b21daac2891491963f09e298f79e97e";
    
    function getWeather(zipcode){
        $.getJSON('//api.openweathermap.org/data/2.5/weather?zip=' + zipcode + ',us&units=imperial&APPID=7b21daac2891491963f09e298f79e97e')
        .done(function(data){
            $('#weather').append('<p>The temp is ' + data.main.temp + ' degrees farenheit</p>');
            $('#weather').append('<p>' + data.weather[0].description + '</p>');
        }).fail(function(){
            alert('Something went wrong');
        });
    };
      
    
$('#submit').on('submit', function(){
    var zip = $('#zip').val();
    getWeather(zip);
    console.log(zip);
});
    //above code block not working calling getWeather function below for 55344
    
    getWeather(55344)
       
});

//api key 7b21daac2891491963f09e298f79e97e