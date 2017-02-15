// googleAuthApp.controller('JournalController', function ($http) {
//   console.log('loaded JC');
//   var vm = this;
//   vm.data = '';
//
//   $http.get('/private/journal')
//     .then(function (response) {
//       console.log('$http.get response in journalController', response);
//       if (response.data.err) {
//         vm.data = 'Sorry, you are not logged in!';
//       } else {
//         vm.data = response.data.journal;
//       }
//     });
//
//
//
// });


googleAuthApp.controller('JournalController', function (JournalService) {
console.log('journal controller connected');
var vm = this; // this refers to contrller
vm.journalList = []; // declaring empty array that will be filled with response from get request, which is array of person objects
vm.data = '';

  vm.getUserJournal = function(){ //
    JournalService.getUserJournal().then(function(response){ // the service will make get request, then response is array of person objects
      console.log('got user data:', response)
      vm.journalList = response[0].journal; // setting our response to the people list so they can be accessed in html and displayed
    }).catch(function(err){ // .catch handles the error
      console.log('error getting user journal', err)
    });
  }; // wanted to put parantheses at end to automatically invoke the
  // function so people are displayed when page first loads
  vm.getUserJournal(); // but vm.getPeople is not function in addPerson without this here
  
  vm.addJournalEntry = function( journalEntry ){ // taking in person object
    console.log('Journal Entry to Add:', journalEntry);
    JournalService.addJournalEntry(journalEntry) // sending person to add to service to then make post request
    .then(function(response){
    }).catch(function(err){ // .catch to handle error
      console.log('error adding journal entry', err)
    });
    vm.journalEntry = {};
    // vm.form.$setPristine();
    // vm.form.$setUntouched();
    vm.getUserJournal();
  }; // end of addPerson

  vm.updateJournalEntry = function(id, data){ // id corresponds to _id value of item in database, and data is whole object of item clicked
    console.log('updating', id, data)
    JournalService.updateJournalEntry(id, data) // sending inforamtion to service to then make put request
    .then(function(){
      console.log('updated journal entry', data);
      vm.getUserJournal(); // running get people function to update info for the display
    }).catch(function(err){
      console.log('error updating journal entry', err)
    });
  }; // end of updatePerson

  vm.deleteJournalEntry = function(id){ // id corresponds to _id value of item in database
    JournalService.deleteJournalEntry(id) // sending id to service to then make delete request
    .then(function(){
    console.log('deleted journal entry');
    vm.getUserJournal(); // running get people function to update info for the display
    }).catch(function(err){
    console.log('error deleting journal entry', err)
    });
  }; // end of deletePerson


}); //end of controller
