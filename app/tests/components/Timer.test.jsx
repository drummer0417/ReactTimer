var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Timer = require('Timer')

describe('Timer', () => {

  it('Should exist', () => {
    expect(Timer).toExist();
  });

  describe('handleStatusChange', () => {

    it('Should set state to status=started and increase Timer', (done) => {

      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleStatusChange('started');

      expect(timer.state.timerStatus).toBe('started');
      expect(timer.state.totalSeconds).toBe(0);

      setTimeout(() => {
        expect(timer.state.totalSeconds).toBe(1);
        done();
      }, 1001);
    });

    it('Should stop increasing timer when status changes to paused', (done) => {

      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleStatusChange('paused');

      setTimeout(() => {
        expect(timer.state.totalSeconds).toBe(0);
        expect(timer.state.timerStatus).toBe('paused');
        done();
      }, 1001);
    });

    it('Should reset totalSeconds to 0 and timerStatus to stopped when status changes to stopped', (done) => {

      var timer = TestUtils.renderIntoDocument(<Timer />);
      timer.handleStatusChange('started');
      setTimeout(() => {
        timer.handleStatusChange('stopped');
        expect(timer.state.totalSeconds).toBe(0);
        expect(timer.state.timerStatus).toBe('stopped');
        done();
      }, 1001);
    });

  });

});
