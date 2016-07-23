import React from "react";
import CommentsActions from "./_actions.jsx";

var _commentForm = React.createClass({

  getInitialState: function () {
    return {
      text: "",
    }
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if(this.state.text)
      CommentsActions.addComment(this.state.text);
    this.setState({text: ""});
  },

  onChange: function(e) {
    this.setState({text: e.target.value});
  },

  render: function() {
    return (
      <div className="comment-form">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="comment" onChange={this.onChange} value={this.state.text}/>
          <input type="submit" value="Submit"/>
        </form>
      </div>
    );
  }
});

module.exports = _commentForm;
