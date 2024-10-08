let initialState = {
	friends: [
		{
			name: 'Malik'
		},
		{
			name: 'Musa'
		},
		{
			name: 'Maga'
		},
	]
}

const setBarReducer = (state = initialState, action) => {

	return {
		...state,
		friends: [...state.friends]
	}
}

export default setBarReducer;