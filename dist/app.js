'use strict';

var App = React.createClass({
	displayName: 'App',

	getInitialState: function getInitialState() {
		return {
			minDate: '',
			maxDate: ''
		};
	},
	handlePick: function handlePick(date) {
		date = new Date(date);
		var oldMinDate = new Date(Date.parse(this.state.minDate));
		var oldMaxDate = new Date(Date.parse(this.state.maxDate));

		if (isNaN(oldMinDate)) {

			this.state.minDate = date;
		} else if (isNaN(oldMaxDate)) {

			if (date < oldMinDate) {

				this.setState({ maxDate: this.state.minDate, minDate: date });
			} else {

				this.setState({ maxDate: date });
			}
		} else if (date < oldMinDate) {

			this.state.minDate = date;
		} else {

			this.state.maxDate = date;
		}

		this.forceUpdate();
	},
	render: function render() {
		return React.createElement(
			'div',
			null,
			React.createElement('input', { placeholder: 'from', value: this.state.minDate, disabled: true }),
			React.createElement('input', { placeholder: 'to', value: this.state.maxDate, disabled: true }),
			React.createElement(Calendar, { handlePick: this.handlePick, minDate: this.state.minDate, maxDate: this.state.maxDate })
		);
	}
});

ReactDOM.render(React.createElement(App, null), document.querySelector('app'));