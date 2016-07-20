/**
 * main likes component
 */

import React from "react";
import Reflux from "reflux";
import LikesStore from "./_store.jsx"
import _likes from "./_likes.jsx"
import _liker from "./_liker.jsx"

var Likes = React.createClass({

	mixins: [Reflux.listenTo(LikesStore, "changed")],

	getInitialState: function () {
		return {
			likes: LikesStore.getLikes(),
		};
	},

	/**
	 * listen on change to data store and update
	 * self state
	 * @return {void}
	 */
	changed: function () {
		this.setState({
			likes: LikesStore.getLikes(),
		});
	},

	render: function () {
		return (
			<div className="likes">
				<_liker />
				<_likes likes={this.state.likes} />
			</div>
		);
	}
});

module.exports = Likes;
