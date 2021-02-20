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
    console.log("projects", projects);
    console.log("curr Proj", currentProject);
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
                <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', padding: '15px', width: '150px', }}>
                    <h3>{`Projects (${projects.length})`}</h3>
                    {projects.map((project, index) => {
                        return (
                            <Link style={{color: 'white'}}>
                            <div key={index} onClick={(e) => changeCurrentProject(project)}style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottom: project?.projectId === currentProject?.projectId ? '4px solid yellow' : '', cursor: 'pointer'}}>
                                <AssignmentIndIcon></AssignmentIndIcon>
                                <p>{project.projectName}</p>
                            </div>
                            </Link>
                        )
                    })}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <AddIcon />
                        <p>Add Project</p>
                    </div>


                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', padding: '15px', backgroundColor: "#4c7c54", width: "150px" }}>
                    <h3>Members</h3>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <PersonIcon></PersonIcon>
                        <p>Ritik Gupta</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <PersonIcon></PersonIcon>
                        <p>Miraj Desai</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <PersonIcon></PersonIcon>
                        <p>Anurag Arasan</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <PersonIcon></PersonIcon>
                        <p>Michael Shen</p>
                    </div>
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