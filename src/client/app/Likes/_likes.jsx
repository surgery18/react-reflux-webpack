import React from "react";
import Reflux from "reflux";

var _likes = React.createClass({
	render: function () {
		return (
			<div>Likes: {this.props.likes}</div>
		);
	}
});

module.exports = _likes;
