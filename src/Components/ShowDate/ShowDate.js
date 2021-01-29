import React from 'react';
import datesUtilities from '../../Utilities/dates';
import './ShowDate.css';

class ShowDate extends React.Component {
    render(){
        return (
            <div className="show-date">
                <p className="show-date-day">
                    {datesUtilities.formatDayName(this.props.currentDate)}
                </p>
                <p className="show-date-month">
                    {datesUtilities.formatMonthName(this.props.currentDate)}, {this.props.currentDate.getDate()}
                </p>
                <p className="show-date-year">
                    {this.props.currentDate.getFullYear()}
                </p>
            </div>
        );
    }
}

export default ShowDate;