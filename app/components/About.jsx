var React = require('react');
var { Link } = require('react-router');

// var About = React.createClass({
//   render: function(){
//     return(
//      ...............
//     );
//   }
// });

// the "Stateless functional component" below does exactly the same as the method below.
// can only be used in case you only have a render method... so no state!

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is version 0.1 of HansWeatherApp<br/><br/></p>
      <p>The app is one of the apps created in the course "<a href='https://www.udemy.com/courses/' target='_blank'>The Complete React Web App Developer</a>"
      </p>
      <p>Some of the tools I used for building this app</p>
      <ul>
        <li><a href="https://facebook.github.io/react" taret="_blank">React</a> - as a javascript framework</li>
        <li><a href="http://openweathermap.org/" taret="_blank">Open Weather Map</a> - the weather api used</li>
        <li>Webpac to bundle the application into a javascript file</li>
        <li>Foundation as a css framework</li>
        <li>jQuery</li>
      </ul>
    </div>
  )
}
module.exports = About;
