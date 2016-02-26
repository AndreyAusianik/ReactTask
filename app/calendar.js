var numbersArr = new Array(36).join('0').split('').map((el,idx)=>idx+1);

var Calendar = React.createClass({
	getInitialState: function() {
		var ret = {
			currentDate : new Date()
		}
		ret.currentDate.setDate(1);
		return ret;
	},
	forward: function() {
		this.setState({currentDate:new Date(this.state.currentDate.getFullYear(),this.state.currentDate.getMonth()+1,1)});
	},

	backward: function() {
		this.setState({currentDate:new Date(this.state.currentDate.getFullYear(),this.state.currentDate.getMonth()-1,1)});
	},
	
	render: function() {
		var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
		var days = ['Sun',"Mon",'Tue','Wed','Thu','Fri','Sat'];
		return (
				<div className="calendar">
					<header>
						<div onClick={this.backward}>&#8656;</div>
						<div className="month-name">
						{months[this.state.currentDate.getMonth()]} 
						{this.state.currentDate.getFullYear()}
						</div>
						<div onClick={this.forward}>&#8658;</div>
					</header>
					<table>
						<thead>
						<tr>
							{days.map(day => 
								<th>{day}</th>
								)}
						</tr>
						</thead>
						<CalendarBody handleDatePick={this.props.handlePick} currentDate={this.state.currentDate} minDate={this.props.minDate} maxDate={this.props.maxDate}/>
					</table>
				</div>
			);
	}
});

