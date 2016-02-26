'use strict';

var numbersArr = new Array(36).join('0').split('').map(function (el, idx) {
	return idx + 1;
});

var Calendar = React.createClass({
	displayName: 'Calendar',

	getInitialState: function getInitialState() {
		var ret = {
			currentDate: new Date()
		};
		ret.currentDate.setDate(1);
		return ret;
	},
	forward: function forward() {
		this.setState({ currentDate: new Date(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth() + 1, 1) });
	},

	backward: function backward() {
		this.setState({ currentDate: new Date(this.state.currentDate.getFullYear(), this.state.currentDate.getMonth() - 1, 1) });
	},

	render: function render() {
		var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
		var days = ['Sun', "Mon", 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
		return React.createElement(
			'div',
			{ className: 'calendar' },
			React.createElement(
				'header',
				null,
				React.createElement(
					'div',
					{ onClick: this.backward },
					'⇐'
				),
				React.createElement(
					'div',
					{ className: 'month-name' },
					months[this.state.currentDate.getMonth()],
					this.state.currentDate.getFullYear()
				),
				React.createElement(
					'div',
					{ onClick: this.forward },
					'⇒'
				)
			),
			React.createElement(
				'table',
				null,
				React.createElement(
					'thead',
					null,
					React.createElement(
						'tr',
						null,
						days.map(function (day) {
							return React.createElement(
								'th',
								null,
								day
							);
						})
					)
				),
				React.createElement(CalendarBody, { handleDatePick: this.props.handlePick, currentDate: this.state.currentDate, minDate: this.props.minDate, maxDate: this.props.maxDate })
			)
		);
	}
});