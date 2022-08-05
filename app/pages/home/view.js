const React = require("react");

function View(props) {
  const { message } = props;

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

module.exports = View;
