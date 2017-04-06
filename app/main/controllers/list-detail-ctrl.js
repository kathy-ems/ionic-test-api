'use strict';
angular.module('main')
.controller('ItemCtrl', function ($log, Main, $stateParams) {

  $log.log('Hello from your Controller: ItemCtrl in module main:. This is your controller:', this);
  this.id = $stateParams.id;
  Main.getItemData(this.id, function (data) {
    this.itemData = data;
  }.bind(this));

});
