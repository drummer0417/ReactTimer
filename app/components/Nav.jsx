var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({

  render: function() {
    return(
      <div classNmame="top-bar menu-text-color">
        <div className="top-bar-left menu-text-color">
          <ul className="menu">
            <li className="menu-text">Timer App</li>
            <li><IndexLink to='/'>Timer</IndexLink></li>
            <li><Link to='/countdown'>Countdown</Link></li>
          </ul>
        </div>
        <div className="top-bar-right menu-text-color">
          <ul className="menu">
            <li className="menu-text">Created by: AndroidAppFactory.nl</li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Nav;
