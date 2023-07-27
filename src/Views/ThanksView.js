import View from "./View";
import sprite from "../../Assets/images/sprite.svg";

class ThanksView extends View {
	_generateHTML = () => {
		const HTML = `
        <div class="thanks__container">
					<div class="thanks__icon-container">
						<svg class="thanks__icon">
                            <use
                                xlink:href="${sprite}#illustration-thank-you"></use>
                        </svg>
					</div>
					<div class="thanks_rate">
						<p>You selected 4 out of five</p>
					</div>
					<div class="thanks__dialogue">
						<h1>Thanks</h1>
						<p>
							We appreciate you taking the time to give a rating.
						</p>
						<p>
							If you ever need more support, don't hesitate to get
							in touch!
						</p>
					</div>
				</div>`;
		return HTML;
	};
}

export default new ThanksView();
