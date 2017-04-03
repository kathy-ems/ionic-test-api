'use strict';

describe('module: main, controller: ListCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ListCtrl;
  var $controller;
  var Main;
  beforeEach(inject(function (_$controller_, _Main_) {
    Main = _Main_;
    $controller = _$controller_;
  }));

  var ExpectedFirstDataPoint =     {
    'userId': 1,
    'id': 1,
    'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
  };

  describe('upon initialization', function () {
    it('should contain an array called listData', function () {
      ListCtrl = $controller('ListCtrl');
      var firstDataPoint = ListCtrl.listData[0];
      expect(firstDataPoint).toEqual(ExpectedFirstDataPoint);
    });

    it('should call Main.getListData', function () {
      spyOn(Main, 'getListData');
      ListCtrl = $controller('ListCtrl');
      expect(Main.getListData).toHaveBeenCalled();
      expect(Main.getListData).toHaveBeenCalledWith();
      expect(Main.getListData.calls.count()).toEqual(1);
    });
  });
});
