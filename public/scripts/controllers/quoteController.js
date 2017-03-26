parkApp.controller('QuoteController', function ($http) {
console.log('Quote Controller');
var vm = this;

  vm.getQuote = function() {
    return $http.get("/private/quote").then(function(response) {
      console.log('Quote:', response.data)
      return vm.quote = response.data;
    }).catch(function(err) {
      console.log("Error getting random quote", err);
    });
  }();

}); //end of controller
