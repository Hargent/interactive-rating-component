import RatingView from "./Views/RatingView";
import ThanksView from "./Views/ThanksView";
import * as model from "./model";

const ratingValueControl = value => {
	model.saveRatingValue(value);
};
const controlRatingSubmission = value => {
	if (model.state.rating === null) return;
	ThanksView.getData(model.state.rating);
	ThanksView.render(value);
};
const init = () => {
	RatingView.render();
	RatingView.handleRatingValue(ratingValueControl);
	RatingView.handleSubmitRating(controlRatingSubmission);
};

init();
