'use strict';
angular.module('main')
.controller('ItemCtrl', function ($log, Main, $stateParams, $state) {

  this.id = $stateParams.id;
  Main.getItemData(this.id, function (data) {
    this.itemData = data;
  }.bind(this));

  this.editItem = function (id) {
    $state.go('main.editItem', { 'id': id });
  };

});
