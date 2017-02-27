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


// //  google maps distance matrix api code
//
// function initMap() {
//   var bounds = new google.maps.LatLngBounds;
//   var markersArray = [];
//
//   var origin = 'Minneapolis, MN';
//   // var destination = {lat: 47.1975, lng: -95.20167};
//   var destination = 'Hill-Annex Mine State Park, MN';
//
//
//
//   var destinationIcon = 'https://chart.googleapis.com/chart?' +
//       'chst=d_map_pin_letter&chld=D|FF0000|000000';
//   var originIcon = 'https://chart.googleapis.com/chart?' +
//       'chst=d_map_pin_letter&chld=O|FFFF00|000000';
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 10
//   });
//   var geocoder = new google.maps.Geocoder;
//
//   var service = new google.maps.DistanceMatrixService;
//   service.getDistanceMatrix({
//     origins: [origin],
//     destinations: [destination],
//     travelMode: 'DRIVING',
//     unitSystem: google.maps.UnitSystem.IMPERIAL,
//     avoidHighways: false,
//     avoidTolls: false
//   }, function(response, status) {
//     if (status !== 'OK') {
//       alert('Error was: ' + status);
//     } else {
//       var originList = response.originAddresses;
//       var destinationList = response.destinationAddresses;
//       var outputDiv = document.getElementById('output');
//       outputDiv.innerHTML = '';
//       deleteMarkers(markersArray);
//
//       var showGeocodedAddressOnMap = function(asDestination) {
//         var icon = asDestination ? destinationIcon : originIcon;
//         return function(results, status) {
//           if (status === 'OK') {
//             map.fitBounds(bounds.extend(results[0].geometry.location));
//             markersArray.push(new google.maps.Marker({
//               map: map,
//               position: results[0].geometry.location,
//               icon: icon
//             }));
//           } else {
//             alert('Geocode was not successful due to: ' + status);
//           }
//         };
//       };
//
//       for (var i = 0; i < originList.length; i++) {
//         var results = response.rows[i].elements;
//         geocoder.geocode({'address': originList[i]},
//             showGeocodedAddressOnMap(false));
//         for (var j = 0; j < results.length; j++) {
//           geocoder.geocode({'address': destinationList[j]},
//               showGeocodedAddressOnMap(true));
//           outputDiv.innerHTML += originList[i] + ' to ' + destinationList[j] +
//               ': ' + results[j].distance.text + ' in ' +
//               results[j].duration.text + '<br>';
//         }
//       }
//     }
//   });
// }
//
// function deleteMarkers(markersArray) {
//   for (var i = 0; i < markersArray.length; i++) {
//     markersArray[i].setMap(null);
//   }
//   markersArray = [];
// }




}); // end of weather controller
