'use strict';
angular.module('main')
.controller('ItemCtrl', function ($log, Main, $stateParams) {

  this.id = $stateParams.id;
  Main.getItemData(this.id, function (data) {
    this.itemData = data;
  }.bind(this));

});
