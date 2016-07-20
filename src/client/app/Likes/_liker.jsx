/**
 * handle interactions for likes
 */

import React from "react";
import Reflux from "reflux";
import LikesActions from "./_actions.jsx";

var _liker = React.createClass({

	/**
	 * like this
	 * @return {void}
	 */
	like: function () {
		LikesActions.addLike();
	},

	/**
	 * dislike this
	 * @return {void}
	 */
	dislike: function () {
		LikesActions.removeLike();
	},

	render: function () {
		return (
			<div className="liker">
				<button onClick={this.like}>+</button>
				<button onClick={this.dislike}>-</button>
			</div>
		)
	}
});

module.exports = _liker;
