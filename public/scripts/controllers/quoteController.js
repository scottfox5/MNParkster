googleAuthApp.controller('QuoteController', function ($http) {
console.log('Quote Controller');
var vm = this;

  vm.getQuote = function() {
    return $http.get("/private/quote").then(function(response) {
      console.log('quote data:', response, response.data)
      return response.data;
      vm.quoteList = response;
    }).catch(function(err) {
      console.log("Error getting random quote", err);
    });
  };
  vm.getQuote();

}); //end of controller
