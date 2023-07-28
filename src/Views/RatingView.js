import View from "./View";
import sprite from "../../Assets/images/sprite.svg";

class RatingView extends View {
	handleRatingValue(handler) {
		this._parentEl.addEventListener("click", e => {
			const valueBtn = e.target.closest(".rating__value-btn");
			// console.log(valueBtn);

			if (!valueBtn) return;

			const buttons =
				this._parentEl.querySelectorAll(".rating__value-btn");
			for (const btn of buttons) {
				btn.classList.remove("checked");
			}

			valueBtn.classList.add("checked");

			const value = valueBtn.dataset.value;
			handler(value);
		});
	}
	handleSubmitRating(handler) {
		this._parentEl.addEventListener("click", e => {
			const submitBtn = e.target.closest(".rating__submit-btn");

			if (!submitBtn) return;

			handler(true);
		});
	}
	_generateHTML() {
		const HTML = `<div class="rating">
                        <div class="rating__icon-container">
                            <svg class="rating__icon">
                                <use xlink:href="${sprite}#icon-star"></use>
                            </svg>
                        </div>
                        <div class="rating__intro">
                            <h1>How did we do ?</h1>
                            <p>
                                Please let us know how we did with your support
                                request. All feedback is appreciated to help us
                                improve our offering!
                            </p>
                        </div>
                        <div class="rating__value-container">
                            <ul class="rating__values">
                                <li class="rating__value">
                                    <button type="radio" name="rate" class="rating__value-btn" data-value=${1}>1</button>
                                </li>
                                <li class="rating__value">
                                    <button type="radio" name="rate" class="rating__value-btn" data-value=${2}>2</button>
                                </li>
                                <li class="rating__value">
                                    <button type="radio" name="rate" class="rating__value-btn" data-value=${3}>3</button>
                                </li>
                                <li class="rating__value">
                                    <button type="radio" name="rate" class="rating__value-btn" data-value=${4}>4</button>
                                </li>
                                <li class="rating__value">
                                    <button type="radio" name="rate" class="rating__value-btn" data-value=${5}>5</button>
                                </li>
                            </ul>
                        </div>
                        <div class="rating__submit">
                            <button class="rating__submit-btn"><span>submit</span></button>
                        </div>
				</div>`;

		return HTML;
	}
}

export default new RatingView();
