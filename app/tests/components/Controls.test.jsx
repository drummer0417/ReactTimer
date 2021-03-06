var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Controls = require('Controls');

describe('Controls', () => {

  it('Should exist', () => {
    expect(Controls).toExist();
  });

  describe('render', () => {

    it('Should render button pause if status is started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls timerStatus={'started'}/>)
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Pause)');

      // .length method on a jQuery selector return the numeber of elements returned by the query
      expect($pauseButton.length).toBe(1);

    });

    it('Should render button start if status is paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls timerStatus={'paused'}/>)
      var $el = $(ReactDOM.findDOMNode(controls));
      var $pauseButton = $el.find('button:contains(Start)');

      // .length method on a jQuery selector return the numeber of elements returned by the query
      expect($pauseButton.length).toBe(1);

    });
  });
});
