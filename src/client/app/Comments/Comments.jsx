import React from "react";
import Reflux from "reflux";
import CommentsStore from "./_store.jsx";
import _commentForm from "./_commentForm.jsx";
import _comment from "./_comment.jsx";

var Comments = React.createClass({

  mixins: [Reflux.listenTo(CommentsStore, "changed")],

  getInitialState: function () {
		return {
      comments: CommentsStore.getComments(),
    }
  },

  changed: function () {
		this.setState({
			comments: CommentsStore.getComments(),
		});
	},

  render: function () {
    var commentNodes = this.state.comments.map(function(comment) {
      return (
        <_comment comment={comment} />
      );
    });
		return (
      <div>
  			<div className="comments">
          {commentNodes}
  			</div>
        <_commentForm />
      </div>
		);
	}
});

module.exports = Comments;
