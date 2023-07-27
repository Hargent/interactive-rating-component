class View {
	_parentEl = document.querySelector("#root");
	render() {
		const html = this._generateHTML();

		this._parentEl.insertAdjacentHTML("beforeend", html);
	}
}

export default View;
