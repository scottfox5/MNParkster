googleAuthApp.service('JournalService', function ($http) { // service is linked in from html script tag

  // this refers to the service
  this.getUserJournal = function() {  // function that begins get request
    return $http.get("/private/journal").then(function(response) { // short-hand get request takes _ as parameter
      console.log('getting user journal:', response, response.data) // response is an object, response.data is array of objects
      return response.data; // return the array of objects to then display on the dom via html
    }).catch(function(err) {  // .catach handles the error
      console.log("Error getting user journal", err);
    });
  };

  this.addJournalEntry = function(journalEntry) { // function that begins post request
    console.log('add journal entry:', journalEntry) // person is object to add to database
    return $http.post("/private/journal", journalEntry) // short-hand post request, takes _ and person object
    .catch(function(err) { // .catch handles the error
      console.log("Error saving journal entry", err);
    });
  };

  this.deleteJournalEntry = function(id) { // function that begins delete request
    console.log ('delete id:', id) // id matches the database _id that we want to delete
    return $http.delete("/private/journal/" + id)
    .catch(function(err) {
      console.log("Error deleting journal entry", err);
    });
  };

  this.updateJournalEntry = function(id, data) {
    console.log('update data:', data);
    return $http.put("/private/journal/" + id, data)
    .catch(function(err) {
      console.log("Error updating journal entry", err);
    });
  };


  // // long versions of get, post, delete, and put requests
  // this.getPeople = function() {
  //   return $http({
  //     method: 'GET',
  //     url: '/person',
  //   }).then(function(response){
  //     console.log('get success', response)
  //     return response.data;
  //   }).catch(function(err){
  //     console.log("Error getting people", err)
  //   });
  // };

  // this.addPerson = function(person) {
  //   return $http({
  //     method: 'POST',
  //     url: '/person',
  //     data: person
  //   }).then(function(response){
  //     console.log('POST success', response)
  //     return response;
  //   }).catch(function(err){
  //     console.log("Error saving person", err)
  //   });
  // };

  // this.deletePerson = function(id) {
  //   return $http({
  //     method: 'DELETE',
  //     url: '/person/' + id
  //   }).then(function(response){
  //     console.log('DELETE success', response)
  //     return response;
  //   }).catch(function(err){
  //     console.log("Error deleting person", err)
  //   });
  // };
  //
  // this.updatePerson = function(id, data) {
  //   console.log('id:', id, 'data:', data);
  //   return $http({
  //     method: 'PUT',
  //     url: '/person/' + id,
  //     data: data
  //   }).then(function(response){
  //     console.log('PUT success', response)
  //     return response;
  //   }).catch(function(err){
  //     console.log("Error updating person", err)
  //   });
  // };

});
