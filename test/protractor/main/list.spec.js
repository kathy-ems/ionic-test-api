'use strict';

describe('List page', function () {

  beforeEach(function () {
    browser.get('#/main/list');
  });

  it('should have a list', function () {
    expect(element(by.css('.item-list')).isPresent()).toBe(true);
  });

  it('should have a list of 100 items', function () {
    var items = element.all(by.repeater('listItem in ctrl.listData'));
    expect(items.count()).toEqual(100);
  });

  it('should have a list containing titles', function () {
    var firstTitle = 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
    expect(element.all(by.repeater('listItem in ctrl.listData')).get(0).element(by.css('h2')).getText()).toBe(firstTitle);
  });

  it('should click the item and go to next page', function () {
    var item = element.all(by.repeater('listItem in ctrl.listData')).get(0);
    item.click();
    expect(browser.getCurrentUrl()).toMatch('/main/list/detail/1');
  });
});
