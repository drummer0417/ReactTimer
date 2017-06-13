var React = require('react');

var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({

  getInitialState() {
    return {
      totalSeconds: 0,
      timerStatus: 'stopped'
    }
  },
  handleStatusChange: function(newStatus) {
    this.setState({ timerStatus: newStatus })
  },
  componentDidUpdate: function(prevProps, prevState) {
    var { timerStatus } = this.state;
    if(timerStatus !== prevState.timerStatus) {
      switch(timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({ totalSeconds: 0 })
        default:
        case 'paused':
          this.stopTimer();
          break;
      }
    }
  },
  componentWillUnmount: function() { // if navigate away from this page
    this.stopTimer();
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newSeconds = this.state.totalSeconds + 1;
      this.setState({ totalSeconds: newSeconds });
    }, 1000)
  },
  stopTimer: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  render: function() {
    var { timerStatus, totalSeconds } = this.state;

    return(
      <div>
        <h1 className="page-title">Timer App</h1>
        {<Clock totalSeconds={totalSeconds} />}
        {<Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange} />}
      </div>
    )
  }
})

module.exports = Timer;
