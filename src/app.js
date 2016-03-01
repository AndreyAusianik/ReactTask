import React from 'react';
import Calendar from './calendar';


export default React.createClass({

	getInitialState: function() {
		return {
			minDate: '',
			maxDate: ''
		}
	},

	handlePick : function(date) {
		date = new Date(date);
		var oldMinDate = new Date(Date.parse(this.state.minDate));
		var oldMaxDate = new Date(Date.parse(this.state.maxDate));

		if(isNaN(oldMinDate)) {

			this.setState({minDate:date});

		} else if(isNaN(oldMaxDate)) {

			if(date < oldMinDate) {

				this.setState({maxDate:this.state.minDate, minDate:date});

			} else {

				this.setState({maxDate:date});

			}

		} else if(date < oldMinDate) {

			this.setState({minDate:date});
		
		} else  {
		
			this.setState({maxDate:date});
		
		}

	},

	render: function() {
		return (
				<div>
					<input placeholder="from" value={this.state.minDate} disabled/>
					<input placeholder="to"  value={this.state.maxDate} disabled/>
					<Calendar handlePick={this.handlePick} {...this.state}/>
				</div>
				);
	}
});


