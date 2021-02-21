import React from 'react'
import Calendar from "./Calendar"
import NavBar from "./NavBar"
import ParticipantsPane from "./ParticipantsPane"
import ProjectPane from "./ProjectPane"
import TaskDashboard from "./TaskDashboard"
import TaskView from "./TaskView"

const drawerWidth = 300;

function WorkspaceContainer(props) {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <ProjectPane />
            {/* <ParticipantsPane /> */}
            <NavBar />
            {/* YOU NEED TO SWITCH BETWEEN CALENDAR, TASK DASHBOARD, AND CHAT VIEW */}
            <TaskView />
        </div>
    );
}

export default WorkspaceContainer;