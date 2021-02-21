import React, {useState} from 'react'
import Drawer from '@material-ui/core/Drawer';
import './TaskView.css'
import { TodayOutlined } from '@material-ui/icons';
import './TaskViewScript'
import AddIcon from '@material-ui/icons/Add';

const TODO = ["Go To Work", "Wash the Dishes", "Take out the Trash", "Meet up with the bros"]
const InProgressTask = ["Coding Website", "Harvesting the beans", "Creating an awesome hackathon project"]
const CompletedTask = ["Became a coding Ninja", "Made Life Good", "Became built different", "Told Dad Jokes"]

function TaskView(props) {
    const tasks = props?.tasks;
    const numberOfTasks = tasks?.toDo?.length || 0 + tasks?.inProgress?.length || 0 + tasks?.completed?.length || 0;
    return (
        <Drawer variant="permanent" anchor="right">
            <div style={{ color: "white", width: '175px', height: "100%", textAlign: 'left', backgroundColor: "#4c7c54", overflow: 'auto' }}>
                <h4 style={{textAlign: 'center'}}>{`Tasks (${numberOfTasks})`}</h4>
                <button class="accordion1" style={{textAlign:"center"}}>To Do</button>
                <div class="panel">
                    {tasks?.toDo?.map((task, index) => {
                        return (<p>{task?.name}</p>)
                    })}         
                </div>
                <button class="accordion2" style={{textAlign:"center"}}>In Progress</button>
                <div class="panel">
                    {tasks?.inProgress?.map((task, index) => {
                        return (<p>{task?.name}</p>)
                    })}         
                </div>
                <button class="accordion3" style={{textAlign:"center"}}>Completed</button>
                <div class="panel">
                    {tasks?.completed?.map((task, index) => {
                        return (<p>{task?.name}</p>)
                    })}         
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <AddIcon />
                        <p>Create Task</p>
                    </div>


            </div>
        </Drawer>
    );
}

export default TaskView;