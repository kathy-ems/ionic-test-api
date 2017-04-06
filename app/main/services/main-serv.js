'use strict';
angular.module('main')
.service('Main', function ($log, $timeout, $http) {
  var apiPath = 'https://jsonplaceholder.typicode.com/posts';

  this.getListData = function (callback) {

    $http.jsonp(apiPath + '?callback=JSON_CALLBACK')
    .success(function (response) {
      callback(response);
    })
    .error(function (err) {
      throw Error('JSONP ERROR!', err);
    });
  };

  // TODO: Implement proxy server to remove CORS
  // this.getListData = function (callback) {
  //   var dataUrl = '/posts';
  //
  //   $http.get(dataUrl)
  //   .success(function (response) {
  //     callback(response);
  //   })
  //   .error(function (err) {
  //     throw Error('ERROR!', err);
  //   });
  // };

  this.getItemData = function (id, callback) {
    var dataUrl = apiPath + '/' + id;

    $http.jsonp(dataUrl + '?callback=JSON_CALLBACK')
    .success(function (response) {
      callback(response);
    })
    .error(function (err) {
      throw Error('JSONP ERROR!', err);
    });
  };

  this.saveItem = function (title, body, callback) {
    var params = {
      title: title,
      body: body
    };
    
    var dataUrl = apiPath + '/' + id;

    $http.jsonp(dataUrl + '?callback=JSON_CALLBACK')
    .success(function (response) {
      callback(response);
    })
    .error(function (err) {
      throw Error('JSONP ERROR!', err);
    });
  }

  this.changeBriefly = function () {
    var initialValue = this.someData.binding;
    this.someData.binding = 'Yeah this was changed';

    var that = this;
    $timeout(function () {
      that.someData.binding = initialValue;
    }, 500);
  };

});
