var React = require('react');

var Controls = React.createClass({

  propTypes: {
    timerStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },
  onStatusChange: function(newStatus) {
    return() => {
      this.props.onStatusChange(newStatus);
    }
  },
  render: function() {
    var { timerStatus } = this.props;
    // var button = this.renderStartPauseButton();

    var renderStartPauseButton = () => {
      if(timerStatus === 'started') {
        return(
          <button onClick={this.onStatusChange('paused')} className="button secondary">Pause</button>
        )
      } else if(timerStatus = 'paused') {
        return(
          <button onClick={this.onStatusChange('started')} className="button primary">Start</button>
        )
      }
    }
    return(
      <div className="controls">
        {renderStartPauseButton()}
        <button onClick={this.onStatusChange('stopped')} className="button alert hollow">Clear</button>
      </div>
    )
  }
});

module.exports = Controls;
