import React from "react";
import Likes from "./Likes/Likes.jsx";
import Comments from "./Comments/Comments.jsx";

class App extends React.Component {
	render () {
		return (
			<div className="app">
				<p>Working with - watch!</p>
				<Likes />
				<br />
				<Comments />
			</div>
		);
	}
};

module.exports = App;
