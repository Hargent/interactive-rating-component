class View {
	_parentEl = document.querySelector("#root");
	render(clear = false) {
		if (clear) {
			this._clear();
		}
		const html = this._generateHTML();

		this._parentEl.insertAdjacentHTML("beforeend", html);
	}
	_clear() {
		this._parentEl.innerHTML = "";
	}
}

export default View;
