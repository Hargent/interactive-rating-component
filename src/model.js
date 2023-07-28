const state = {
	rating: null
};

const saveRatingValue = value => {
	state.rating = value;
	// console.log(state.rating);
};

export { state, saveRatingValue };
