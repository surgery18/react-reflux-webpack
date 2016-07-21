import React from "react";

var _likes = React.createClass({
  render: function() {
    return (
      <div className="count">Likes: {this.props.likes}</div>
    );
  }
});

module.exports = _likes;
