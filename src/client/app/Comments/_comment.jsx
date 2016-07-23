import React from "react";
import Likes from "../Likes/Likes.jsx";

var _comment = React.createClass({
  render: function(){
    return (
      <div className="comment"><span>Comment: {this.props.text}</span><Likes/></div>
    );
  }
});

module.exports = _comment;
