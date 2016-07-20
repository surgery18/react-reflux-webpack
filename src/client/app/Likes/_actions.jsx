/**
 * all likes related actions
 */

import Reflux from "reflux";

var LikesActions = Reflux.createActions([
	"addLike",
	"removeLike"
]);

module.exports = LikesActions;
