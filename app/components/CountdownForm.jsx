var React = require('react');

var CountDownForm = React.createClass({

  onFormSubmit: function(e) {
    e.preventDefault();
    var { onSetTotalSeconds } = this.props;
    var seconds = this.refs.seconds.value;

    // check if seconds contains numbers only and > 0
    if(seconds.match(/^[0-9]*$/) && seconds > 0) {
      onSetTotalSeconds(parseInt(seconds, 10));
    } else {
      alert('Enter a number > 0');
    }
    this.refs.seconds.value = '';
  },
  render: function() {
    return(
      <div>
        <form ref="form" onSubmit={this.onFormSubmit} className="countdown-form">
          <input ref='seconds' type="text" autoFocus placeholder='Enter time in seconds' />
          <button className='button expanded'>Start</button>
        </form>
      </div>
    )
  }
})

module.exports = CountDownForm;
