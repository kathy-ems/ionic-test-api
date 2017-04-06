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
    var itemData = {
      'userId': 1,
      'id': 1,
      'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    };
    callback(itemData);
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
