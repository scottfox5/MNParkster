googleAuthApp.controller('JournalController', function (JournalService) {
console.log('journal controller connected');
var vm = this;
vm.journalList = [];
vm.data = '';

  vm.getUserJournal = function(){ //
    JournalService.getUserJournal().then(function(response){
      console.log('got user data:', response)
      vm.journalList = response[0].journal;
    }).catch(function(err){
      console.log('error getting user journal', err)
    });
  }; // end of getUserJournal
  vm.getUserJournal();

  vm.addJournalEntry = function( journalEntry ){
    console.log('Journal Entry to Add:', journalEntry);
    JournalService.addJournalEntry(journalEntry)
    .then(function(response){
    }).catch(function(err){
      console.log('error adding journal entry', err)
    });
    vm.journalEntry = {};
    vm.getUserJournal();
  }; // end of addJournalEntry

  vm.updateJournalEntry = function(id, data){
    JournalService.updateJournalEntry(id, data)
    .then(function(){
      console.log('updated journal entry', data);
      vm.getUserJournal();
    }).catch(function(err){
      console.log('error updating journal entry', err)
    });
  }; // end of updateJournalEntry

  vm.deleteJournalEntry = function(id){
    JournalService.deleteJournalEntry(id)
    .then(function(){
    console.log('deleted journal entry:' id);
    vm.getUserJournal();
    }).catch(function(err){
    console.log('error deleting journal entry', err)
    });
  }; // end of deleteJournalEntry


}); //end of controller
