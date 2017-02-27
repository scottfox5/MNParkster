parkApp.controller('WeatherController', function($http){

  var vm = this;

  vm.searchWeather = function(location) {
    return $http.get("/weather/" + location).then(function(response) {
      // console.log('Location:', location)
      // console.log('Weather Forecast:', response.data.daily.data);
      vm.weather = response.data.daily.data;

      // var day0 = new Date();
      // vm.weather[0]["day"] = day0;
      // var day1 = new Date();
      // day1.setDate(day1.getDate() + 1);
      // vm.weather[1]["day"] = day1;
      // var day2 = new Date();
      // day2.setDate(day2.getDate() + 2);
      // vm.weather[2]["day"] = day2;
      // var day3 = new Date();
      // day3.setDate(day3.getDate() + 3);
      // vm.weather[3]["day"] = day3;
      // var day4 = new Date();
      // day4.setDate(day4.getDate() + 4);
      // vm.weather[4]["day"] = day4;
      // var day5 = new Date();
      // day5.setDate(day5.getDate() + 5);
      // vm.weather[5]["day"] = day5;
      // var day6 = new Date();
      // day6.setDate(day6.getDate() + 6);
      // vm.weather[6]["day"] = day6;
      // var day7 = new Date();
      // day7.setDate(day7.getDate() + 7);
      // vm.weather[7]["day"] = day7;

// for loop to add date to weather forecast objects
// it works but shows error in the console that cannot update property day of undefined
      for (var i = 0; i <= 8; i++){
        var dayi = new Date();
        dayi.setDate(dayi.getDate() + i);
        vm.weather[i]["day"] = dayi;
        // console.log(dayi);
      }

      console.log(vm.weather[0]);
      return vm.weather;
    }).catch(function(err) {
      console.log("Error getting weather", err);
    });
  };

}); // end of weather controller
