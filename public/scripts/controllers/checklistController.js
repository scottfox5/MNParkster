googleAuthApp.controller('ChecklistController', function (ChecklistService) {
console.log('Checklist Controller');
var vm = this;
vm.parkList = [];

  vm.getParks = function(){ //
    ChecklistService.getParks().then(function(response){
      console.log('got user data:', response)
      vm.parkList = response;
    }).catch(function(err){
      console.log('error getting user checklist', err)
    });
  }; // end of getParks
  vm.getParks();
}); //end of controller
