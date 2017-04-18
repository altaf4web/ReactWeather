var React = require('react');
var {Link} = require('react-router');
var Examples = (props) => {
  return (
    <div>
      <h3 className="text-center">Examples</h3>
      <p>here is a few example to try out!!</p>
      <ol>
        <li>
          <Link to='/?location=Bangalore'>Bangalore, India</Link>
        </li>
        <li>
          <Link to='/?location=Delhi'>Delhi, India</Link>

        </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
