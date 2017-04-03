'use strict';

describe('module: main, controller: ListCtrl', function () {
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  var $controller;
  var Main;

  beforeEach(function () {
    module('main');

    inject(function (_$controller_, _Main_) {
      Main = _Main_;
      $controller = _$controller_;
    });
  });

  describe('upon initialization', function () {
    it('should call Main.getListData', function () {
      spyOn(Main, 'getListData');
      $controller('ListCtrl');
      expect(Main.getListData).toHaveBeenCalled();
      expect(Main.getListData.calls.count()).toEqual(1);
    });
  });
});
