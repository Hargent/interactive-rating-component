const state = {
	rating: null
};

const saveRatingValue = value => {
	state.rating = value;
	// console.log(state.rating);
};

export { state, saveRatingValue };
// "devDependencies": {
// 		"parcel": "^2.9.3",
// 		"process": "^0.11.10"
// 	}