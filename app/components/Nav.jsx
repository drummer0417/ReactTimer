var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

  render: function() {
    return(
      <div classNmame="top-bar">
        <div className="top-bar-left menu-text-color">
          <ul className="menu">
            <li className="menu-text">Timer App</li>
            <li><IndexLink to='/' activeClassName='active-link'>Timer</IndexLink></li>
            <li><Link to='/countdown' activeClassName='active-link'>Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right menu-text-color">
          <ul className="menu">
            <li className="menu-text">by: AndroidAppFactory.nl</li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Nav;
