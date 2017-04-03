'use strict';

describe('module: main, service: Main', function () {

  // load the service's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate service
  var Main;
  var $timeout;
  beforeEach(inject(function (_Main_, _$timeout_) {
    Main = _Main_;
    $timeout = _$timeout_;
  }));

  describe('.changeBriefly()', function () {
    beforeEach(function () {
      Main.changeBriefly();
    });
    it('should briefly change', function () {
      expect(Main.someData.binding).toEqual('Yeah this was changed');
      $timeout.flush();
      expect(Main.someData.binding).toEqual('Yes! Got that databinding working');
    });
  });

  describe('.getListData()', function () {
    var listData;
    var expectedListData = [{
      'userId': 1,
      'id': 1,
      'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
    }];
    var getListDataIsCalled;

    beforeEach(function () {
      getListDataIsCalled = false;

      Main.getListData = function (callback) {
        getListDataIsCalled = true;
        callback(expectedListData);
      };
    });

    it('should call Main.getListData', function () {
      var callback = jasmine.createSpy();
      Main.getListData(callback);
      expect(callback).toHaveBeenCalled();
    });

    it('should return an array of list objects', function () {
      Main.getListData(function (data) {
        listData = data;
      });
      expect(getListDataIsCalled).toBeTruthy;
      expect(listData).toEqual(expectedListData);
    });

  });
});
