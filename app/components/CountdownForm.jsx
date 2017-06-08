var React = require('react');

var CountDownForm = React.createClass ({

  onFormSubmit: function(e){
    e.preventDefault();

    console.log('in CountdownForm.handleTotalSeconds()');
    var {onSetTotalSeconds} = this.props;
    var seconds = this.refs.seconds.value;


    if (seconds > 0) {
      onSetTotalSeconds(seconds);
    } else{
      alert('Enter a number > 0');
    }
    this.refs.seconds.value = '';
  },
  render: function(){
    return(
      <div>
        <form  onSubmit={this.onFormSubmit}>
          <input ref='seconds' type="text" autoFocus placeholder='Enter number of seconds to countdown' />
          <button className='button expanded' >Start</button>
        </form>
      </div>
    )
  }
})

module.exports = CountDownForm;
