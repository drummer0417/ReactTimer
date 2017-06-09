var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm');

var Countdown = React.createClass({

  getInitialState: function() {
    return({
      totalSeconds: 0
    })
  },
  handleSetTotalSeconds: function(totalSeconds) {
    console.log('In handleSetTotalSeconds: ', totalSeconds);
    this.setState({
      totalSeconds: totalSeconds
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
