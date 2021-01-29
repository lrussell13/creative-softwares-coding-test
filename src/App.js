import React from 'react';
import TaskDisplay from './Components/TaskDisplay/TaskDisplay';

import './App.css';
import TaskCounter from './Components/TaskCounter/TaskCounter';
import ShowDate from './Components/ShowDate/ShowDate';
import AddTask from './Components/AddTask/AddTask';

class App extends React.Component {
  state = {
    page: 'pending',
    idCount: 2,
    adding: false,
    tasks: [
      {
        completed: false,
        title: "Task 1",
        priority: "medium",
        dueDate: new Date(),
        active: true,
        id: 0
      },
      {
        completed: false,
        title: "Task 2",
        priority: "low",
        dueDate: new Date(),
        active: false,
        id: 1
      }
    ],
    currentDate: new Date(),
    taskToAdd: {
      completed: false,
      title: "",
      priority: "undecided",
      dueDate: new Date(),
      active: false,
      id: 0
    }
  }

  setDueDate = (e, date, id) => {
    e.stopPropagation();

    let tasks = this.state.tasks;

    const taskIndex = tasks.findIndex(task => task.id === id);
    tasks[taskIndex].dueDate = date;

    this.setState({tasks});
  }

  setActiveTask = (id) => {
    let tasks = this.state.tasks;

    const taskIndex = tasks.findIndex(task => task.id === id);
    const taskState = tasks[taskIndex].active;

    tasks.forEach(task => task.active = false);
    
    tasks[taskIndex].active = !taskState;

    this.setState({tasks});
  }

  setPriority = (e, priority, id) => {
    e.stopPropagation();

    let tasks = this.state.tasks;

    const taskIndex = tasks.findIndex(task => task.id === id);
    tasks[taskIndex].priority = priority;

    this.setState({tasks});
  }

  filterTasks = () => {
    if(this.state.page === 'pending'){
      return this.state.tasks.filter(task => task.completed === false);
    } else {
      return this.state.tasks.filter(task => task.completed === true);
    }
  }

  setPageDisplay = page => {
    this.setState({page});
  }

  onCheckTask = (e, id) => {
    e.stopPropagation();

    let tasks = this.state.tasks;

    const taskIndex = tasks.findIndex(task => task.id === id);
    tasks[taskIndex].completed = !tasks[taskIndex].completed;

    this.setState({tasks});
  }

  onSaveTask = e => {
    e.preventDefault();

    let tasks = this.state.tasks;
    let taskToAdd = this.state.taskToAdd;
    let idCount = this.state.idCount;

    taskToAdd.id = idCount;
    idCount++;

    tasks.push(taskToAdd);

    this.setState({idCount});
    this.setState({tasks});
    this.setState({adding: false});
    this.setState({taskToAdd: {
      completed: false,
      title: "",
      priority: "undecided",
      dueDate: new Date(),
      active: false,
      id: 0
    }});
  }

  onDeleteTask = (e, id) => {
    e.stopPropagation();

    let tasks = this.state.tasks;
    tasks = tasks.filter(task => task.id !== id);

    this.setState({tasks});
  }

  onAddTaskTitleChange = e => {
    let taskToAdd = this.state.taskToAdd;
    taskToAdd.title = e.target.value;

    this.setState({taskToAdd});
  }

  setTaskToAddPriority = (e, priority) => {
    e.preventDefault();

    let taskToAdd = this.state.taskToAdd;

    taskToAdd.priority = priority;

    this.setState({taskToAdd});
  }

  onSetAddTaskDate = (e, date) => {
    e.preventDefault();

    let taskToAdd = this.state.taskToAdd;

    taskToAdd.dueDate = date;

    this.setState({taskToAdd});
  } 

  onClearAddTask = e => {
    e.preventDefault();

    this.setState({adding: false});
    this.setState({taskToAdd: {
      completed: false,
      title: "",
      priority: "undecided",
      dueDate: new Date(),
      active: false,
      id: 0
    }});
  }

  onSetAdding = e => {
    this.setState({adding: true});
  }

  render(){
    return (
      <div className="app">
        <div className="app-left"></div>
        <TaskDisplay 
          tasks={this.filterTasks()}
          setActiveTask={this.setActiveTask}
          setDueDate={this.setDueDate}
          setPriority={this.setPriority}
          setPageDisplay={this.setPageDisplay}
          onCheckTask={this.onCheckTask}
          onDeleteTask={this.onDeleteTask}
          page={this.state.page}
          onSetAdding={this.onSetAdding}
        />
        <div className="app-right">
          <ShowDate currentDate={this.state.currentDate}/>
          <TaskCounter numberOfTasks={this.state.tasks.length}/>
        </div>
        {this.state.adding ? 
        (<AddTask 
          taskToAdd={this.state.taskToAdd}
          onSaveTask={this.onSaveTask}
          onAddTaskTitleChange={this.onAddTaskTitleChange}
          setTaskToAddPriority={this.setTaskToAddPriority}
          onSetAddTaskDate={this.onSetAddTaskDate}
          onClearAddTask={this.onClearAddTask}
        />) : ""}
      </div>
    );
  }
}

export default App;
