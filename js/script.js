$(function() {
    var apiKey = "7b21daac2891491963f09e298f79e97e";
    
    function getWeather(){
        $.getJSON('//api.openweathermap.org/data/2.5/weather?zip=' + '55344' + ',us&units=imperial&APPID=7b21daac2891491963f09e298f79e97e')
        .done(function(data){
            $('#weather').append('<p>The temp is ' + data.main.temp + '</p>');
            $('#weather').append('<p>' + data.weather[0].description + '</p>');
        }).fail(function(){
            alert('Something went wrong');
        });
    };
    
    
getWeather();    
    
    
    
    
    
//var zip = ""    
//$('#submit').on('submit', function(){
//    $.preventDefault();
//    zip = $('#zip').val();
//    if (zip.length > 0){
//        getWeather();
//  } else {
//        alert('Please enter a zip');
//    };
//});
    
       
});

//api key 7b21daac2891491963f09e298f79e97e