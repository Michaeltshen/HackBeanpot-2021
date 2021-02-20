import React, { useEffect, useState } from 'react'
import Calendar from "./Calendar"
import NavBar from "./NavBar"
import ParticipantsPane from "./ParticipantsPane"
import ProjectPane from "./ProjectPane"
import TaskDashboard from "./TaskDashboard"
import TaskView from "./TaskView"
import axios from 'axios';
import {v1 as uuid} from "uuid"; 
import {
    BrowserRouter as Router,
    Link,
    useLocation
  } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';


const drawerWidth = 300;
const BACKEND_API_URL = "https://11c8a7c1c9e8.ngrok.io/api"



function WorkspaceContainer(props) {
    const query = useQuery();
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    useEffect(() => {
        getUserData()
    }, [])

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const getUserData = async() => {
        const userId = query.get("userId")
        if (userId) {
            const url = "https://cors-anywhere.herokuapp.com/" + `${BACKEND_API_URL}/users/getUser`;
            const response = await axios.post(url, {id: userId})
            if (response) {
                setUser(response.data[0])
                setLoading(false);
            }
         }
        
    }

    if (loading) {
        return (
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px'}}>
            <CircularProgress />
            </div>
        )
    }
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <ProjectPane projects={user?.projects}/>
            {/* <ParticipantsPane /> */}
            <NavBar />
            {/* YOU NEED TO SWITCH BETWEEN CALENDAR, TASK DASHBOARD, AND CHAT VIEW */}
            <TaskView />
        </div>
    );
}

export default WorkspaceContainer;