import React from "react";
import _likes from "./_likes.jsx";

var Likes = React.createClass({

  getInitialState: function() {
    return {
      likes: 0,
    };
  },

  like: function() {
    this.setState({likes: this.state.likes+1});
  },

  dislike: function() {
    if(this.state.likes > 0)
      this.setState({likes: this.state.likes-1});
  },

  render: function() {
    return (
      <div className="Likes">
        <div className="liker">
          <button onClick={this.like}>+</button>
          <button onClick={this.dislike}>-</button>
        </div>
        <_likes likes={this.state.likes}/>
      </div>
    );
  }

});

module.exports = Likes;
