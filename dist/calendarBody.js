"use strict";

var CalendarBody = React.createClass({
	displayName: "CalendarBody",

	fillDates: function fillDates() {
		var dates = [];
		var date = new Date(this.props.currentDate);
		var lastday = new Date(this.props.currentDate.getFullYear(), this.props.currentDate.getMonth() + 1, 0).getDate();
		var day = date.getDay();

		for (var i = 0; i < day; i++) {
			dates.push('');
		}

		for (var i = day; i < lastday + day; i++) {
			var curDay = new Date();

			curDay.setYear(date.getFullYear());
			curDay.setMonth(date.getMonth());
			curDay.setDate(1 + i - day);

			var disabled = this.props.minDate != "" && curDay < this.props.minDate || this.props.maxDate !== "" && curDay > this.props.maxDate;

			dates.push({ value: '' + (1 + i - day), className: disabled ? 'disabled' : '' });
		}

		for (var i = lastday + day, overalDays = 6 * 7; i < overalDays; i++) {
			dates.push('');
		}

		return dates;
	},

	getInitialState: function getInitialState() {

		return {
			firstDate: this.props.currentDate
		};
	},

	dateClick: function dateClick(evt) {

		var el = evt.target;
		var value = el.innerHTML;
		if (value == '') return;

		value = +value;
		var dateToSet = new Date(this.state.firstDate);
		dateToSet.setDate(value);
		this.props.handleDatePick(dateToSet);
	},

	render: function render() {
		var _this = this;

		this.state.firstDate = this.props.currentDate;
		var dates = this.fillDates();

		return React.createElement(
			"tbody",
			null,
			[0, 1, 2, 3, 4, 5].map(function (row) {
				return (// one for each week of month
					React.createElement(
						"tr",
						null,
						dates.slice(row * 7, (row + 1) * 7).map(function (el) {
							return React.createElement(
								"td",
								{ onClick: _this.dateClick, className: el.className },
								el.value
							);
						})
					)
				);
			})
		);
	}
});