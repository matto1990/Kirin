var application = {};

Object.defineProperties(application, {
});

function lazyGetter (property, fn) {
  var propertyName = '_' + property;
  Object.defineProperty(application, property, {
    get: function () {
      var instance = this[propertyName];
      if (!instance) {
        this[propertyName] = instance = fn.apply(this, arguments);
      }
      return instance;
    },

    set: function (value) {
      this.reset();
      this[propertyName] = value;
    }
  });

}

lazyGetter('DumbButtonScreenModule', function () {
  return require('./button/dumb-button-screen');
});

lazyGetter('DumbListScreenModule', function () {
  return require('./list/dumb-list-screen');
});
