'use strict';
angular.module('main')
.service('Main', function ($log, $timeout, $http) {

  $log.log('Hello from your Service: Main in module main');

  // some initial data
  this.someData = {
    binding: 'Yes! Got that databinding working'
  };

  this.getListData = function (callback) {
    var dataUrl = 'https://jsonplaceholder.typicode.com/posts';

    $http.jsonp(dataUrl + '?callback=JSON_CALLBACK')
    .success(function (response) {
      callback(response);
    })
    .error(function (err) {
      throw Error('JSONP ERROR!', err);
    });
  };

  this.changeBriefly = function () {
    var initialValue = this.someData.binding;
    this.someData.binding = 'Yeah this was changed';

    var that = this;
    $timeout(function () {
      that.someData.binding = initialValue;
    }, 500);
  };

});
