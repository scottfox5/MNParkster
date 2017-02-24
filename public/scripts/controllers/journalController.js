parkApp.controller('JournalController', function (JournalService) {
// console.log('Journal Controller Connected');
var vm = this;
vm.journalList = [];
vm.data = '';

  vm.getUserJournal = function(){ //
    JournalService.getUserJournal().then(function(response){
      // console.log('Got Journal Data:', response)
      vm.journalList = response;
    }).catch(function(err){
      console.log('error getting user journal', err)
    });
  }; // end of getUserJournal
  vm.getUserJournal();

  vm.addJournalEntry = function( journalEntry ){
    // console.log('Journal Entry to Add:', journalEntry);
    JournalService.addJournalEntry(journalEntry)
    .then(function(response){
    }).catch(function(err){
      console.log('error adding journal entry', err)
    });
    swal("Dope!", journalEntry.park+" State Park sounds like heaven on earth!", "success")
    vm.journalEntry = {};
    vm.getUserJournal();
  }; // end of addJournalEntry

  vm.updateJournalEntry = function(id, data){
    JournalService.updateJournalEntry(id, data)
    .then(function(){
      // console.log('Updated Journal Entry', data);
      vm.getUserJournal();
      swal("Groovy", "You succesfully updated your journal entry.", "success")
    }).catch(function(err){
      console.log('error updating journal entry', err)
    });
  }; // end of updateJournalEntry

  vm.deleteJournalEntry = function(id, park){
    swal({
      title: "Are you sure?",
      text: "You will not be able to recover this journal entry!",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DD6B55",confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel please!",
      closeOnConfirm: false,
      closeOnCancel: false },
      function(isConfirm){
        if (isConfirm) {
          swal("Deleted!", "That trip to "+ park +" State Park sucked anyway.", "success");
          JournalService.deleteJournalEntry(id)
          .then(function(response){
            vm.getUserJournal();
          });// end http delete call
        } else {
          swal("Cancelled", "Your journal entry is safe :)", "error");
        }// end else
      });// end swal alert
    };// end deleteJournalEntry

    //


}); //end of controller
