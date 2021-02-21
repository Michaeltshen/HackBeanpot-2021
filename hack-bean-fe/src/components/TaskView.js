import React from 'react'
import Drawer from '@material-ui/core/Drawer';


function TaskView(props) {

    return (
        <Drawer variant="permanent" anchor="right">
            <div style={{ color: "white", width: '175px', height: "100%", textAlign: 'center', backgroundColor: "#4c7c54" }}>
                <h3>Your assigned tasks</h3>
                <ul>
                    <li>Miraj</li>
                    <li>Miraj</li>
                    <li>Miraj</li>
                    <li>Miraj</li>
                    <li>Miraj</li>
                    <li>Miraj</li>
                    <li>Miraj</li>
                    <li>Miraj</li>
                    <li>Miraj</li>
                    <li>Miraj</li>
                </ul>
                
            </div>
        </Drawer>
    );
}

export default TaskView;