var React = require('react');

var Controls = React.createClass({

  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired
  },
  onStop: function() {
    console.log('in onStop');
    // this.setState({
    //   countdownStatus: "stopped"
    // })
  },
  renderStartStopButton: function(countdownStatus) {

    if(countdownStatus === 'started') {
      return(
        <button className="button secondary">Pause</button>
      )
    } else if(countdownStatus = 'paused') {
      return(
        <button className="button primary">Start</button>
      )
    }
  },
  render: function() {

    var { countdownStatus } = this.props;
    var button = this.renderStartStopButton(countdownStatus);

    return(
      <div>
      {button}
      <button className="button alert hollow">Clear</button>
    </div>
    )
  }
});

module.exports = Controls;
