var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({

  getInitialState: function() {
    return({
      totalSeconds: 0,
      countdownStatus: 'stopped'
    })
  },
  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.countdownStatus !== prevState.countdownStatus) {
      switch(this.state.countdownStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':

          break;
        case 'paused':

          break;
      }
    }
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.totalSeconds - 1;
      this.setState({
        totalSeconds: newCount
      })
      if(newCount === 0) {
        this.stopTimer();
      }
    }, 1000);
  },
  stopTimer: function() {
    clearInterval(this.timer);
    this.setState({
      countdownStatus: 'stopped'
    })
  },
  handleSetTotalSeconds: function(totalSeconds) {
    this.setState({
      totalSeconds: totalSeconds,
      countdownStatus: 'started'
    });
  },
  render: function() {
    var { totalSeconds } = this.state;

    return(
      <div>
        <h1 className="text-center page-title">Countdown</h1>
        <Clock totalSeconds={totalSeconds} />
        <CountdownForm onSetTotalSeconds={this.handleSetTotalSeconds}/>
      </div>
    )
  }
})

module.exports = Countdown;
