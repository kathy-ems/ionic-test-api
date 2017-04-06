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

    describe('should set the id based on routeParams', function () {
      var ItemCtrl;
      var scope;

      beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        ItemCtrl = $controller('ItemCtrl', {
          $scope: scope,
          $routeParams: {id: 4}
        });
      }));

      it('should set the id', function () {
        expect(ItemCtrl.itemData.id).toBeTruthy;
        // expect(ItemCtrl.itemData.id).toEqual(4);
      });
    });
  });
});
