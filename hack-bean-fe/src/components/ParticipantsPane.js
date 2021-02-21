import React, {useState} from 'react'
import Drawer from '@material-ui/core/Drawer';

const people = ["Miraj Desai", "Ritik Gupta", "Anurag Arasan", "Michael Shen"]

function ParticipantsPane(props) {
    return (
        <Drawer variant="permanent" anchor="right">
            <div style = {{backgroundColor:"#4c7c54"}}>
                {people.map((index, person) => {
                    <p>{person}</p>
                })}

            </div>
        </Drawer>
    )
}

export default ParticipantsPane;