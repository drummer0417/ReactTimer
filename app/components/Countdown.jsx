var React = require('react');

var Clock = require('Clock');
var CountdownForm = require('CountdownForm');
var Controls = require('Controls');

var Countdown = React.createClass({
  getInitialState: function() {
    return({
      totalSeconds: 0,
      timerStatus: 'stopped'
    })
  },
  componentDidUpdate: function(prevProps, prevState) {
    if(this.state.timerStatus !== prevState.timerStatus) {
      switch(this.state.timerStatus) {
        case 'started':
          this.startTimer();
          break;
        case 'stopped':
          this.setState({ totalSeconds: 0 })
          // break; =======> no break --> next case will also be executed
        case 'paused':
          this.stopTimer();
          break;
      }
    }
  },
  componentWillUnmount: function() {
    this.stopTimer();
  },
  startTimer: function() {
    this.timer = setInterval(() => {
      var newCount = this.state.totalSeconds - 1;
      this.setState({
        totalSeconds: newCount
      })
      if(newCount <= 0) {
        this.setState({ timerStatus: 'stopped' })
      }
    }, 1000);
  },
  stopTimer: function() {
    clearInterval(this.timer);
    this.timer = undefined;
  },
  handleSetTotalSeconds: function(totalSeconds) {
    this.setState({
      totalSeconds: totalSeconds,
      timerStatus: 'started'
    });
  },
  handleStatusChange: function(newStatus) {
    this.setState({
      timerStatus: newStatus
    })
  },

  render: function() {
    var { totalSeconds, timerStatus } = this.state;

    var renderFormOrControls = () => {
      if(timerStatus !== 'stopped') {
        return <Controls timerStatus={timerStatus} onStatusChange={this.handleStatusChange} />;
      } else {
        return <CountdownForm onSetTotalSeconds={this.handleSetTotalSeconds}/>;
      }
    }
    return(
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={totalSeconds} />
        {renderFormOrControls()}
      </div>
    )
  }
})

module.exports = Countdown;
