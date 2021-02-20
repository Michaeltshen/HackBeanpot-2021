import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Paper from '@material-ui/core/Paper';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/Add';


function ProjectPane(props) {
    const projects = props?.projects;
    console.log("projects", projects);
    return (
        <Drawer anchor="left" variant="permanent"  >
            <div style={{ color: "white", display: 'flex', flexDirection: 'row', height: '100%', width: "300px", background: "#23562e" }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', padding: '15px', width: '150px' }}>
                    <h3>{`Projects (${projects.length})`}</h3>
                    {projects.map((project, index) => {
                        return (
                            <div key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <AssignmentIndIcon></AssignmentIndIcon>
                                <p>{project.projectName}</p>
                            </div>
                        )
                    })}
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <AddIcon/>
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
                        <AddIcon/>
                        <p style={{}}>Add Member</p>
                    </div>
                </div>
            </div>

        </Drawer>

    );
}

export default ProjectPane;