'use strict';

describe('module: main, controller: ItemCtrl', function () {
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
    it('should call Main.getItemData', function () {
      spyOn(Main, 'getItemData');
      $controller('ItemCtrl');
      expect(Main.getItemData).toHaveBeenCalled();
      expect(Main.getItemData.calls.count()).toEqual(1);
    });

    it('should set the id', function () {
      var ItemCtrl = $controller('ItemCtrl');
      expect(ItemCtrl.id).toBeTruthy;
    });
  });
});
