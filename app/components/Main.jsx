var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
  return (
    <div>
      <Navigation />
      <div>
        <div className="row">
        <div className="columns medium-8 large-6 small-centered">
        {props.children}
      </div>
    </div>
      </div>
    </div>
  )
}
module.exports = Main;
