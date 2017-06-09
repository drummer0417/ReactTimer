var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils')

var Clock = require('Clock');

describe('Clock', () => {

  it('Should exist', () => {
    expect(Clock).toExist();
  });

  describe('Render', () => {

    it('Should render clock to output', () => {
      var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={3662} />);
      var $el = $(ReactDOM.findDOMNode(clock));
      var actualText = $el.find('.clock-text').text();

      expect(actualText).toBe('01:01:02');
    });
  });

  describe('Format seconds', () => {

    it('Should format seconds to mm:ss', () => {
      var clock = TestUtils.renderIntoDocument(<Clock />);
      var seconds = 615;
      var expected = "00:10:15";
      var actual = clock.formatSeconds(615);

      expect(actual).toBe(expected);
    });

    it('Should format seconds to mm:ss when min or sec are < 10', () => {
      var clock = TestUtils.renderIntoDocument(<Clock />);
      var seconds = 615;
      var expected = "00:02:04";
      var actual = clock.formatSeconds(124);

      expect(actual).toBe(expected);
    });
  });
})
