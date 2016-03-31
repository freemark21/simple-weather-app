$(function() {
    var apiKey = "7b21daac2891491963f09e298f79e97e";
    
    function getWeather(){
        $.getJSON('//api.openweathermap.org/data/2.5/weather?zip=55344,us&APPID=7b21daac2891491963f09e298f79e97e')
        .done(function(data){
            console.log(data);
        }).fail(function(){
            alert('Something went wrong');
        });
    };
    
getWeather();    
});

//api key 7b21daac2891491963f09e298f79e97e