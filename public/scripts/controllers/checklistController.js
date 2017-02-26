parkApp.controller('ChecklistController', function ($http) {
// console.log('Checklist Controller');
var vm = this;

  vm.getParks = function(){ //
      return $http.get("/private/checklist").then(function(response) {
        console.log('Checklist Data:', response.data)
        return vm.checklist = response.data;
      }).catch(function(err) {
        console.log("Error getting checklist", err);
      });
  }; // end of getParks

  vm.getParks();

}); //end of controller
