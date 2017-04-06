'use strict';
angular.module('main')
.controller('ListCtrl', function ($log, Main, Config, $cordovaDevice) {

  Main.getListData(function (data) {
    this.listData = data;
  }.bind(this));

  this.ENV = Config.ENV;
  this.BUILD = Config.BUILD;
  // get device info
  ionic.Platform.ready(function () {
    if (ionic.Platform.isWebView()) {
      this.device = $cordovaDevice.getDevice();
    }
  }.bind(this));
});
