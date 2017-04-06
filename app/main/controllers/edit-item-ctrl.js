'use strict';
angular.module('main')
.controller('EditItemCtrl', function ($log, Main, $stateParams) {

  this.saved = false;

  this.id = $stateParams.id;
  Main.getItemData(this.id, function (data) {
    this.itemData = data;
  }.bind(this));

  this.saveItem = function (title, body) {

    Main.saveItem(this.id, title, body, function (data) {
      if(data) {
        this.saved = true;
        this.saveMessage = 'Saved!!';
      } else {
        this.saveMessage = 'Not Saved';
      }
    }.bind(this));

  };

  this.clearSave = function () {
    this.saved = false;
  };

});
