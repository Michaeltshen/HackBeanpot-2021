import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Paper from '@material-ui/core/Paper';
import PersonIcon from '@material-ui/icons/Person';


function ProjectPane() {
    return (
        <Drawer anchor="left"  variant="permanent"  >
            <div style={{ color:"white", display: 'flex', flexDirection: 'row', height: '100%', maxWidth: "300px", background: "#23562e" }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', padding: '15px',  borderRight: '2px solid gray' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <AssignmentIndIcon></AssignmentIndIcon>
                        <p>Campus Hackathon</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <AssignmentIndIcon></AssignmentIndIcon>
                        <p>Potluck Event</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <AssignmentIndIcon></AssignmentIndIcon>
                        <p>Homecoming Event</p>
                    </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column',  padding: '15px', backgroundColor:"#4c7c54"}}>
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
                </div>
            </div>

        </Drawer>

    );
}

export default ProjectPane;