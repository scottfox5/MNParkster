parkApp.controller('AuthController', function (AuthFactory) {
  // console.log('AuthController Connected')
  var vm = this;
  var authFactory = AuthFactory;

  vm.loggedIn = authFactory.checkLoggedIn(); // NOTE: only updated on page load

});
