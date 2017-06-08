 var React = require('react');
var Clock = require('Clock');
var Countdown = React.createClass({
  render: function() {
    return(
      <div>
        <h1 className="text-center page-title">Countdown</h1>
        <Clock totalSeconds={128} />
      </div>
    )
  }
})

module.exports = Countdown;
