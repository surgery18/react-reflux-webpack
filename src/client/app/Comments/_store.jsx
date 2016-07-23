import Reflux from "reflux";
import CommentsActions from "./_actions.jsx";

var CommentsStore = Reflux.createStore({
  comments: [],
  listenables: CommentsActions,

  addComment: function(c) {
    this.comments.push(c);
    this.trigger(this.comments);
  }
});

module.exports = CommentsStore;
