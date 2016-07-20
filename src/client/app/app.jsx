import React from "react";
import Likes from "./Likes/Likes.jsx";

class App extends React.Component {
	render () {
		return (
			<div className="app">
				<p>Working with - watch!</p>
				<Likes />
			</div>
		);
	}
};

module.exports = App;
