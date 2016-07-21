import React from "react";
import Comments from "./Comments/Comments.jsx";

class App extends React.Component {
	render () {
		return (
			<div className="app">
				<p>Working with - watch!</p>
				<br />
				<Comments />
			</div>
		);
	}
};

module.exports = App;
