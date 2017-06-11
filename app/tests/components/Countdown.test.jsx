var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ = require('jQuery');

var Countdown = require('Countdown')

describe('Countdown', () => {

  it('Should exist', () =>{
    expect(Countdown).toExist();
  });

  describe('handleSetTotalSeconds', () => {

    it('Should set state to status=started and totalSeconds=10', (done) => {

      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetTotalSeconds(10);

      expect(countdown.state.countdownStatus).toBe('started');
      expect(countdown.state.totalSeconds).toBe(10);

      setTimeout(() =>{
        expect(countdown.state.totalSeconds).toBe(9);
        done();
      }, 1001);
    });

    it('Should stop counting down if totalSeconds = 0', (done) => {

      var countdown = TestUtils.renderIntoDocument(<Countdown />);
      countdown.handleSetTotalSeconds(1);

      setTimeout(() =>{
        expect(countdown.state.totalSeconds).toBe(0);
        done();
      }, 3001);
    });
  });

});
