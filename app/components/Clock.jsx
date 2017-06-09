var React = require('react');

var Clock = React.createClass({

  getDefaultProps: function() {
    return {
      totalSeconds: 0
    }
  },
  propTypes: {
    totalSeconds: React.PropTypes.number
  },
  formatSeconds: function(totalSeconds) {

    // hous = totalSeconds  / 3600 rounded down
    var hours = Math.floor(totalSeconds / 3600);
    if(hours < 10) {
      hours = '0' + hours;
    }
    // minutes = (totalSeconds - (hours * 60)   / 60 rounded down
    var minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    if(minutes < 10) {
      minutes = '0' + minutes;
    }
    // seconds = remainder of totalSeconds / 60
    var seconds = totalSeconds % 60;
    if(seconds < 10) {
      seconds = '0' + seconds;
    }

    return hours + ":" + minutes + ":" + seconds;
  },
  render: function() {
    var { totalSeconds } = this.props;
    return(
      <div className="clock">
        <span className="clock-text">
          {this.formatSeconds(totalSeconds)}
        </span>
      </div>

    );
  }
});

module.exports = Clock;
