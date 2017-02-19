googleAuthApp.service('ChecklistService', function ($http) {

  this.getParks = function() {
    return $http.get("/private/checklist").then(function(response) {
      console.log('Getting User Checklist:', response.data)
      return response.data;
    }).catch(function(err) {
      console.log("Error getting checklist", err);
    });
  };
});
