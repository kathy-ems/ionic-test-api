'use strict';
angular.module('main')
.controller('EditItemCtrl', function ($log, Main, $stateParams) {

  this.saved = false;

  this.id = $stateParams.id;
  Main.getItemData(this.id, function (data) {
    this.itemData = data;
  }.bind(this));

  this.saveItem = function (title, body) {
    this.saved = true;

    Main.saveItem(title, body, function (data) {
      this.itemData = data;
    }.bind(this));

  };

  this.clearSave = function () {
    this.saved = false;
  };

});
