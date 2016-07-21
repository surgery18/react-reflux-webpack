import React from "react";
import Reflux from "reflux";

var _comment = React.createClass({
  render: function(){
    return (
      <div>Comment: {this.props.comment}</div>
    );
  }
});

module.exports = _comment;
