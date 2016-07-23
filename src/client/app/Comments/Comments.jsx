import React from "react";
import Reflux from "reflux";
import CommentsStore from "./_store.jsx";
import _commentForm from "./_commentForm.jsx";
import _comment from "./_comment.jsx";

var Comments = React.createClass({

  mixins: [Reflux.connect(CommentsStore, "comments")],

  render: function () {
    var commentNodes = null;
    if(this.state.comments)
      var commentNodes = this.state.comments.map(function(comment) {
        return (
          <_comment text={comment} />
        );
      });
		return (
      <div className="comment-section">
  			<div className="comments">
          {commentNodes}
  			</div>
        <_commentForm />
      </div>
		);
	}
});

module.exports = Comments;
