import React, {useState} from 'react'
import Drawer from '@material-ui/core/Drawer';
import './TaskView.css'
import { TodayOutlined } from '@material-ui/icons';
import './TaskViewScript'

const TODO = ["Go To Work", "Wash the Dishes", "Take out the Trash", "Meet up with the bros"]
const InProgressTask = ["Coding Website", "Harvesting the beans", "Creating an awesome hackathon project"]
const CompletedTask = ["Became a coding Ninja", "Made Life Good", "Became built different", "Told Dad Jokes"]

function TaskView(props) {
    return (
        <Drawer variant="permanent" anchor="right">
            <div style={{ color: "white", width: '175px', height: "100%", textAlign: 'center', 
            backgroundColor: "#4c7c54", overflow:"auto"}}>
                <h3 style={{fontSize:"1.5em"}}>Your assigned tasks</h3>
                <button class="accordion1" style={{textAlign:"center"}}>To Do</button>
                <div class="panel">
                    {TODO.map((task, index) => {
                        return (<p>{task}</p>)
                    })}         
                </div>
                <button class="accordion2" style={{textAlign:"center"}}>In Progress</button>
                <div class="panel">
                    {InProgressTask.map((task, index) => {
                        return (<p>{task}</p>)
                    })}         
                </div>
                <button class="accordion3" style={{textAlign:"center"}}>Completed</button>
                <div class="panel">
                    {CompletedTask.map((task, index) => {
                        return (<p>{task}</p>)
                    })}         
                </div>
            </div>
        </Drawer>
    );
}

export default TaskView;