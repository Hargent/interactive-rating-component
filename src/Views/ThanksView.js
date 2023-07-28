import View from "./View";
import sprite from "../../Assets/images/sprite.svg";

class ThanksView extends View {
	_data = null;
	getData(data) {
		this._data = data;
	}
	_generateHTML = () => {
		const HTML = `
        <div class="thanks">
					<div class="thanks__icon-container">
						<svg class="thanks__icon">
                            <use
                                xlink:href="${sprite}#illustration-thank-you"></use>
                        </svg>
					</div>
					<div class="thanks_rate">
						<p>You selected <figure>${this._data}</figure> out of 5 </p>
					</div>
					<div class="thanks__dialogue">
						<h1>Thank you!</h1>
                        <div class="thanks__dialogue-content" >
                        
						<p>
							We appreciate you taking the time to give a rating.
						</p>
						<p>
							If you ever need more support, don't hesitate to get
							in touch!
						</p>
                        </div>
					</div>
				</div>`;
		return HTML;
	};
}

export default new ThanksView();
