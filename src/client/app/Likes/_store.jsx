import Reflux from "reflux";
import LikesActions from "./_actions.jsx";

var LikesStore = Reflux.createStore({
	likes: 0,

	init: function () {
		this.listenTo(LikesActions.addLike, this.increment);
		this.listenTo(LikesActions.removeLike, this.decrement);
	},

	increment: function () {
		this.likes += 1;
		this.trigger(this.likes);
	},

	decrement: function () {
		this.likes -= (this.likes === 0) ? 0 : 1;
		this.trigger(this.likes);
	},

	getLikes: function() {
		return this.likes;
	}
});

module.exports = LikesStore;
