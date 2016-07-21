import React from "react";
import Reflux from "reflux";
import Likes from "../Likes/Likes.jsx";

var _comment = React.createClass({
  render: function(){
    return (
      <div className="Comment">Comment: {this.props.text}<Likes/></div>
    );
  }
});

module.exports = _comment;
