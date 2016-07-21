import Reflux from "reflux";
import CommentsActions from "./_actions.jsx";

var CommentsStore = Reflux.createStore({
  comments: [],

  init: function () {
    this.listenTo(CommentsActions.addComment, this.addComment);
  },

  addComment: function(c) {
    this.comments.push(c);
    this.trigger(this.comments);
  },

  getComments: function() {
    return this.comments;
  }
});

module.exports = CommentsStore;
