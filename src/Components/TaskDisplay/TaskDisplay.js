import React from 'react';
import Task from '../Task/Task';
import addCircle from '../../Content/add-circle.png';
import './TaskDisplay.css';

class TaskDisplay extends React.Component {
    render(){
        return (
        <div className="task-display">
                <div className="header">
                    <p>
                        <span className={"display-selection " + (this.props.page === 'pending' ? "active" : "")} onClick={() => this.props.setPageDisplay('pending')}>Pending</span> <span className={"display-selection " + (this.props.page === 'completed' ? "active" : "")} onClick={() => this.props.setPageDisplay('completed')}>Completed</span>
                    </p>
                </div>
                <div className="task-container">
                    {this.props.tasks.map(task => {
                        return (
                            <Task 
                                key={task.id} 
                                task={task} 
                                setActiveTask={this.props.setActiveTask}
                                setDueDate={this.props.setDueDate}
                                setPriority={this.props.setPriority}
                                onCheckTask={this.props.onCheckTask}
                                onDeleteTask={this.props.onDeleteTask}
                            />
                        );
                    })}
                    <img src={addCircle} alt="add a task" className="add-circle" onClick={e => this.props.onSetAdding(e)}/>
                </div>
        </div>
        );
  }
}

export default TaskDisplay;
