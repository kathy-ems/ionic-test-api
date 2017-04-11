'use strict';
angular.module('main')
.service('Main', function ($log, $timeout, $http) {
  var apiPath = '/posts';

  this.getListData = function (callback) {
    var dataUrl = apiPath;

    $http.get(dataUrl)
    .success(function (response) {
      callback(response);
    })
    .error(function (err) {
      throw Error('ERROR!', err);
    });
  };

  this.getItemData = function (id, callback) {
    var dataUrl = apiPath + '/' + id;

    $http.get(dataUrl)
    .success(function (response) {
      callback(response);
    })
    .error(function (err) {
      throw Error('JSONP ERROR!', err);
    });
  };

  this.saveItem = function (id, title, body, callback) {
    var params = {
      title: title,
      body: body
    }; // if it was a real put, these would be passed

    var dataUrl = apiPath + '/' + id;

    $http.put(dataUrl)
    .success(function (response) {
      callback(response);
    })
    .error(function (err) {
      throw Error('UPDATE ERROR!', err);
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
