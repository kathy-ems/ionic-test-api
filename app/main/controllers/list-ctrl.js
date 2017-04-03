'use strict';
angular.module('main')
.controller('ListCtrl', function ($log, Main, Config, $cordovaDevice) {

  $log.log('Hello from your Controller: ListCtrl in module main:. This is your controller:', this);

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
