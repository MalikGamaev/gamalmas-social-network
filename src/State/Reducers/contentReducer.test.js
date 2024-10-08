import React from "react"
import contentReducer, { addPostActionCreator, deletePost } from "./contentReducer"

const state = {
	posts: [
		{ message: 'hi', likesCount: 35 },
		{ message: 'fsef', likesCount: 355 },
		{ message: 'hisdfs', likesCount: 335 },
		{ message: 'hawdi', likesCount: 352 },
	],
}

