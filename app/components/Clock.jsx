var React = require('react');

var Clock = React.createClass({

  formatSeconds: function(totalSeconds){
    // seconds = remainder of totalSeconds / 60
    var seconds = totalSeconds % 60;
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    // minutes = totalSeconds  / 60 rounded down
    var minutes = Math.floor(totalSeconds / 60);
    if (minutes < 10) {
      minutes = '0' + minutes;
    }

    return minutes + ":" + seconds;
  },
  render: function() {
    return(
      <div>
        <h3>The clock</h3>
      </div>

    );
  }
});

module.exports = Clock;
