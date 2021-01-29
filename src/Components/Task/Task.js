import React from 'react';
import DatePicker from 'react-datepicker';
import datesUtilities from '../../Utilities/dates';

import {ReactComponent as Unchecked} from '../../Content/unchecked-checkbox.svg';
import {ReactComponent as Checked} from '../../Content/checked-checkbox.svg';
import {ReactComponent as Cancel} from '../../Content/cancel-icon.svg';
import {ReactComponent as DateSelector} from '../../Content/date-select.svg';

import "react-datepicker/dist/react-datepicker.css";
import './Task.css';

class Task extends React.Component {
    chooseCheckMark = task => {
        if (task.completed) {
            return <Checked className={"checkbox-" + task.priority}/>;
        } else {
            return <Unchecked className={"checkbox-" + task.priority}/>;
        }
    }

    render(){
        const DatePickerInput = ({ value, onClick }) => (
            <DateSelector className="custom-input" onClick={onClick}/>
        );
        
        return (
        <div className="task" onClick={() => this.props.setActiveTask(this.props.task.id)}>
                <div className="task-header">
                    <p className="task-title"><span className="checkbox" onClick={e => this.props.onCheckTask(e, this.props.task.id)}>{this.chooseCheckMark(this.props.task)}</span>{this.props.task.title}</p>
                    <div className="task-header-right">
                        {this.props.task.active ? <Cancel onClick={e => this.props.onDeleteTask(e, this.props.task.id)}/> : ""}
                        <p className="task-due-date">{datesUtilities.formatDateForDisplay(this.props.task.dueDate)}</p>
                        {this.props.task.active ? <div onClick={e => e.stopPropagation()}><DatePicker customInput={<DatePickerInput />} onChange={(date, e) => this.props.setDueDate(e, date, this.props.task.id)}/></div> : ""} 
                    </div>
                </div>
                {this.props.task.active ? (
                    <div className="task-info">
                        <div className="task-buttons">
                            <button className={"priority low " + (this.props.task.priority === "low" || this.props.task.priority === "undecided" ? "active" : "")} onClick={e => this.props.setPriority(e, "low", this.props.task.id)}>Low</button>
                            <button className={"priority medium " + (this.props.task.priority === "medium" || this.props.task.priority === "undecided" ? "active" : "")} onClick={e => this.props.setPriority(e, "medium", this.props.task.id)}>Medium</button>
                            <button className={"priority high " + (this.props.task.priority === "high" || this.props.task.priority === "undecided" ? "active" : "")} onClick={e => this.props.setPriority(e, "high", this.props.task.id)}>High</button>
                        </div>
                    </div>
                ) : null}
        </div>
        );
  }
}

export default Task;
