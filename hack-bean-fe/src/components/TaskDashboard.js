import React from 'react'
import "./TaskDashboard.css"

const windowWidth = window.innerWidth
function TaskDashboard(props) {
    var toDo = ["Hey!"]
    var inProgress = []
    var completed = []

    const tasksStyle = {
        display: "flex",
        border: "1px solid black",
        justifyContent: "space-around",
        height:"100vh"
    }

    const containerStyle = {
        width:`calc(${windowWidth}px - 475px)`,
        height: "100%"
    }

    const toDoStyle = {

    }

    const inProgressStyle = {

    }

    const completedStyle = {

    }

    return (
        <div style = {containerStyle}>
            <h1>Task Dashboard</h1>
            <div style={tasksStyle}>
                <div className = "taskDiv" style={toDoStyle}>
                    <h2>To Do</h2>
                    {toDo.map((task, index) => (
                        <p>{task}</p>
                    ))}
                </div>
                <div className = "taskDiv" style={inProgressStyle}>
                    <h2>In Progress</h2>
                    {inProgress.map((task, index) => (
                        <p>{task}</p>
                    ))}
                </div>
                <div className = "taskDiv" style={completedStyle}>
                    <h2>Completed</h2>
                    {completed.map((task, index) => (
                        <p>{task}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TaskDashboard;