import React from 'react'
import "./TaskDashboard.css"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

const windowWidth = window.innerWidth;
function TaskDashboard(props) {
    var toDo = ["Go To Work", "Wash the Dishes", "Take out the Trash", "Meet up with the bros"]
    var inProgress = ["Coding Website", "Harvesting the beans", "Creating an awesome hackathon project"]
    var completed = ["Became a coding Ninja", "Made Life Good", "Became built different", "Told Dad Jokes"]
    const tasks = props?.tasks;
    console.log("tasks IN TASK DASHBOARD", tasks);
    const tasksStyle = {
        display: "flex",
        // border: "1px solid black",
        justifyContent: "center",
        width: `calc(${windowWidth}px - 475px)`
    }

    const containerStyle = {
        width: `calc(${windowWidth}px - 475px)`,
        // padding: "10px",
        // backgroundImage: `url(${cotton_candy_scene})`,
        // border: "1px solid orange"

    }

    const toDoStyle = {

    }

    const inProgressStyle = {

    }

    const completedStyle = {

    }

    const useStyles = makeStyles((theme) => ({
        root: {
            display: 'flex',
            flexWrap: 'wrap',
            '& > *': {
                margin: theme.spacing(1),
                width: theme.spacing(16),
                height: theme.spacing(16),
                border: "1px solid blue"
            },
            backgroundColor: "#23562e",
        },
    }));

    const classes = useStyles();

    return (
        <div>
            <h1 style={{ marginLeft: "40px" }}>Task Dashboard</h1>
            <div style={tasksStyle}>
                <Paper style={{ backgroundColor: "#23562e", color: "white" }} className="taskDiv" elevation="10" >
                    <div style={toDoStyle}>
                        <h2>To Do</h2>
                        {tasks?.toDo?.map((task, index) => (
                            <Draggable>
                                <p>{task?.name} ({props?.users.find(user => user?.id === task?.assignee).name?.split(" ")[0]})</p>
                            </Draggable>

                        ))}
                    </div>
                </Paper>
                <Paper style={{ backgroundColor: "#23562e", color: "white" }} className="taskDiv" elevation="10">
                    <div style={inProgressStyle}>
                        <h2>In Progress</h2>
                        {tasks?.inProgress?.map((task, index) => (
                            <Draggable>
                                <p>{task?.name} ({props?.users.find(user => user?.id === task?.assignee).name?.split(" ")[0]})</p>
                            </Draggable>
                        ))}
                    </div>
                </Paper>
                <Paper style={{ backgroundColor: "#23562e", color: "white" }} className="taskDiv" elevation="10">
                    <div style={completedStyle}>
                        <h2>Completed</h2>
                        {tasks?.completed?.map((task, index) => (
                            <Draggable>
                                <p>{task?.name} ({props?.users.find(user => user?.id === task?.assignee).name?.split(" ")[0]})</p>
                            </Draggable>
                        ))}
                    </div>
                </Paper>
            </div>
        </div>
    )
}

export default TaskDashboard;