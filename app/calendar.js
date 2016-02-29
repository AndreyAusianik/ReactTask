let Calendar = React.createClass({
	getInitialState: function() {
		let ret = {
			currentDate : new Date()
		}
		ret.currentDate.setDate(1);
		return ret;
	},
	moveToDay: function(day) {
		this.setState({currentDate:new Date(this.state.currentDate.getFullYear(),day,1)});
	},
	forward: function() {
		this.moveToDay(this.state.currentDate.getMonth()+1);
	},

	backward: function() {
		this.moveToDay(this.state.currentDate.getMonth()-1);
	},
	
	render: function() {
		let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		let days = ['Sun',"Mon",'Tue','Wed','Thu','Fri','Sat'];
		return (
				<div className="calendar">
					<div className="header">
						<div onClick={this.backward}>&#8656;</div>
						<div className="month-name">
						{months[this.state.currentDate.getMonth()]} 
						{this.state.currentDate.getFullYear()}
						</div>
						<div onClick={this.forward}>&#8658;</div>
					</div>
					<table>
						<thead>
						<tr>
							{days.map(day => 
								<th>{day}</th>
								)}
						</tr>
						</thead>
						<CalendarBody {...this.props} {...this.state} handleDatePick = {this.props.handlePick}/>
					</table>
				</div>
			);
	}
});
