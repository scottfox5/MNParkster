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
    JournalService.deleteJournalEntry(id)
    .then(function(){
    // console.log('Deleted Journal Entry:', id, park);
    vm.getUserJournal();
    swal("Deleted!", "That trip to "+ park +" State Park sucked anyway.", "success")
    }).catch(function(err){
    console.log('error deleting journal entry', err)
    });
  }; // end of deleteJournalEntry

// vm.confirmDelete(){
//   swal({
//   title: "Are you sure?",
//   text: "You will not be able to recover this journal entry!",
//   type: "warning",
//   showCancelButton: true,
//   confirmButtonClass: "btn-danger",
//   confirmButtonText: "Yes, delete it!",
//   cancelButtonText: "No, cancel please!",
//   closeOnConfirm: false,
//   closeOnCancel: false
//   },
//   function(isConfirm) {
//     if (isConfirm) {
//       vm.deleteJournalEntry = function(id){
//         JournalService.deleteJournalEntry(id)
//         .then(function(){
//         console.log('deleted journal entry:', id);
//         vm.getUserJournal();
//         }).catch(function(err){
//         console.log('error deleting journal entry', err)
//         });
//       }; // end of deleteJournalEntry
//       swal("Deleted!", "It's gone forever.", "success");
//     } else {
//       swal("Cancelled", "Your journal entry is safe:)", "error");
//     }
//   });
// };



}); //end of controller
