define(function (require) {
    // Load any app-specific modules
    // with a relative require call,
    // like:
    var dice = require('./dice');
  

    console.log(dice.create(10,10,60,60));
});