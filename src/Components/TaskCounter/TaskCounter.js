import React from 'react';
import './TaskCounter.css';

class TaskCounter extends React.Component {
    formatTaskCounterLabel = numberOfTasks => {
        return numberOfTasks > 1 ? "Tasks" : "Task";
    }

    render(){
        return (
            <div className="task-counter">
                <p className="task-counter-number">
                    {this.props.numberOfTasks}
                </p>
                <p className="task-counter-label">
                    {this.formatTaskCounterLabel(this.props.numberOfTasks)}
                </p>
            </div>
        );
    }
}

export default TaskCounter