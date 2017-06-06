var React = require('react');
var { Link, IndexLink } = require('react-router');

var Navigation = React.createClass({

  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">Timer App</li>
            <li><IndexLink to='/' activeClassName='active-link'>Timer</IndexLink></li>
            <li><Link to='/countdown' activeClassName='active-link'>Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right">
          <ul className="menu">
            <li className="menu-text">by: <a href="http://github.com/drummer0417" target="_blank">AndroidAppFactory.nl</a></li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Navigation;
