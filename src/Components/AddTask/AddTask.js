import React from 'react';
import DatePicker from 'react-datepicker';
import {ReactComponent as DateSelector} from '../../Content/date-select.svg';
import datesUtilities from '../../Utilities/dates';
import './AddTask.css';

class AddTask extends React.Component {
    render(){
        const DatePickerInput = ({ value, onClick }) => (
            <DateSelector className="custom-input" onClick={onClick}/>
        );

        return (
            <div className="add-task">
                <div className="add-task-inner">
                    <form>
                        <div className="task-add">
                            <div className="task-header">
                            <input id="task-title" type="text" onChange={e => this.props.onAddTaskTitleChange(e)} value={this.props.taskToAdd.title} placeholder="Task Title"></input>
                                <div className="task-header-right">
                                    <p className="task-due-date">{datesUtilities.formatDateForDisplay(this.props.taskToAdd.dueDate)}</p>
                                    <div onClick={e => e.stopPropagation()}><DatePicker customInput={<DatePickerInput />} onChange={(date, e) => this.props.onSetAddTaskDate(e, date)}/></div>
                                </div>
                            </div>
                            <div className="task-info">
                                <div className="task-buttons">
                                    <button className={"priority low " + (this.props.taskToAdd.priority === "low" || this.props.taskToAdd.priority === "undecided" ? "active" : "")} onClick={e => this.props.setTaskToAddPriority(e, "low")}>Low</button>
                                    <button className={"priority medium " + (this.props.taskToAdd.priority === "medium" || this.props.taskToAdd.priority === "undecided" ? "active" : "")} onClick={e => this.props.setTaskToAddPriority(e, "medium")}>Medium</button>
                                    <button className={"priority high " + (this.props.taskToAdd.priority === "high" || this.props.taskToAdd.priority === "undecided" ? "active" : "")} onClick={e => this.props.setTaskToAddPriority(e, "high")}>High</button>
                                </div>
                            </div>
                        </div>
                        <div id="control-btns">
                            <button id="clear-btn" onClick={e => this.props.onClearAddTask(e)}>Clear</button>
                            <button id="save-btn" onClick={e => this.props.onSaveTask(e)}>Save</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddTask;