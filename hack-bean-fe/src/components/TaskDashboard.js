import React from 'react'

function TaskDashboard(props) {

    return (
        <div>
            {props.items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </div>
    );
}

export default TaskDashboard;