/**
 * central data store for all likes
 */

import Reflux from "reflux";
import LikesActions from "./_actions.jsx";

var LikesStore = Reflux.createStore({
	likes: 0, // no. of likes

	init: function () {
		this.listenTo(LikesActions.addLike, this.increment);
		this.listenTo(LikesActions.removeLike, this.decrement);
	},

	/**
	 * add a like
	 * @return {void}
	 */
	increment: function () {
		this.likes += 1;
		this.trigger(this.likes);
	},

	/**
	 * remove a like
	 * @return {void}
	 */
	decrement: function () {
		this.likes -= (this.likes === 0) ? 0 : 1;
		this.trigger(this.likes);
	},

	/* public interface */

	/**
	 * likes getter
	 * @return {int}
	 */
	getLikes: function() {
		return this.likes;
	}
});

module.exports = LikesStore;
