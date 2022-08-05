const React = require("react");
const View = require("./view");

function render(req, res) {
  const Home = (props) => <View {...props} />;

  res.render(Home, {
    message: "Lo que sea",
  });
};

module.exports = render;
