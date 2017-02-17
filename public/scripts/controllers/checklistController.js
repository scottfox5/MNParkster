googleAuthApp.controller('ChecklistController', function (ChecklistService) {
console.log('checklist controller connected');
var vm = this;
vm.parkList = [];
vm.data = '';

  vm.getParks = function(){ //
    ChecklistService.getParks().then(function(response){
      console.log('got user data:', response)
      vm.parkList = response;
    }).catch(function(err){
      console.log('error getting user checklist', err)
    });
  }; // end of getUserJournal
  vm.getParks();

  // googleAuthApp.filter('unique', function() {
  //    return function(collection, keyname) {
  //       var output = [],
  //           keys = [];
  //
  //       angular.forEach(collection, function(item) {
  //           var key = item[keyname];
  //           if(keys.indexOf(key) === -1) {
  //               keys.push(key);
  //               output.push(item);
  //           }
  //       });
  //
  //       return output;
  //    };
  // });

}); //end of controller
