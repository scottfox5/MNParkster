parkApp.service('JournalService', function ($http) {

  this.getUserJournal = function() {
    return $http.get("/private/journal").then(function(response) {
      // console.log('get user journal:', response.data)
      return response.data;
    }).catch(function(err) {
      console.log("Error getting user journal", err);
    });
  };

  this.addJournalEntry = function(journalEntry) {
    // console.log('add journal entry:', journalEntry)
    return $http.post("/private/journal", journalEntry)
    .catch(function(err) {
      console.log("Error saving journal entry", err);
    });
  };

  this.updateJournalEntry = function(id, data) {
    // console.log('update data:', data);
    return $http.put("/private/journal/" + id, data)
    .catch(function(err) {
      console.log("Error updating journal entry", err);
    });
  };

  this.deleteJournalEntry = function(id) {
    // console.log ('delete id:', id)
    return $http.delete("/private/journal/" + id)
    .catch(function(err) {
      console.log("Error deleting journal entry", err);
    });
  };

  // automatically resizes textareas on mouseover and keyup

}); // end of journal service

function auto_grow(element) {
    element.style.height = "5px";
    element.style.height = (element.scrollHeight)+"px";
}
