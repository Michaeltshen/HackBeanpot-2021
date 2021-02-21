import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Paper from '@material-ui/core/Paper';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';


function ProjectPane(props) {
    const projects = props?.projects;
    const currentProject = props?.currentProject;
    const users = props?.users;
    const currentUser = props?.currentUser;
    console.log("projects", projects);
    console.log("curr Proj", currentProject);
    console.log("users", users);
    const projStyle = {
        color: "white", 
        display: 'flex', 
        flexDirection: 'row', 
        height: '100%', 
        width: "300px", 
        background: "#23562e", 
        "&:hover": {
            transform: "scale(1.10)"
        }
    }

    const changeCurrentProject = (project) => {
        if(project.projectId !== currentProject.projectId) {
            props.setCurrentProject(project);
        }

    }
    return (
        <Drawer anchor="left" variant="permanent"  >
            <div style={{
                color: "white", display: 'flex', flexDirection: 'row', height: '100%', width: "300px", background: "#23562e"}}>
                <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', padding: '15px', width: '120px' }}>
                    <h4>{`Projects (${projects.length})`}</h4>
                    {projects.map((project, index) => {
                        return (
                            <div key={index} onClick={(e) => changeCurrentProject(project)}style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: project?.projectId === currentProject?.projectId ? '4px solid yellow' : '', cursor: 'pointer'}}>
                                <AssignmentIndIcon></AssignmentIndIcon>
                                <p>{project.projectName}</p>
                            </div>
                        )
                    })}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <AddIcon />
                        <p>Add Project</p>
                    </div>


                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', padding: '15px', backgroundColor: "#4c7c54", width: '120px'  }}>
                    <h4 >{`Members (${users?.length})`}</h4>
                    {users.map((user, index) => {
                        return (
                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <PersonIcon></PersonIcon>
                                <p style={{fontWeight: `${user?.id === currentUser?.id ? 'bold' : null}`}}>{`${user?.name}`}</p>
                                {user?.id === currentUser?.id &&
                                <span style={{fontSize: '12px', color: 'lightgray'}}>(You)</span>}
                        </div>
                        )
                    })}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <AddIcon />
                        <p style={{}}>Add Member</p>
                    </div>
                </div>
            </div>

        </Drawer>

    );
}

export default ProjectPane;