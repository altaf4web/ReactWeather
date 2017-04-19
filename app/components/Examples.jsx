var React = require('react');
var {Link} = require('react-router');
var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Examples</h1>
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
