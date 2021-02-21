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
    const [currentProject, setCurrentProject] = useState(null);
    const [user, setUser] = useState(null);
    const [users, setUsers] = useState([])
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        getUserData()
        fetchAllUsers();
        fetchAllProjects();
    }, [])

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    const getUserData = async() => {
        const userId = query.get("userId") ? query.get("userId") : localStorage.getItem('userId')
        if (userId) {
            const url = "http://localhost:8080/" + `${BACKEND_API_URL}/users/getUser`;
            console.log(url);
            let response = await axios.post(url, {id: userId})

            if (response) {
                response.data[0].projects[1].tasks = {
                    "toDo": [{"name": "Fill out request sheet", "assignee": "06f16e00-740b-11eb-8c66-f9629119ca23"}],
                    "inProgress": [{"name": "Finish re scripting homework task", "assignee": "06f16e00-740b-11eb-8c66-d8k3af119ca23"}],
                    "completed": [{"name": "Talk to Ms.Tofel about hacking method", "assignee": "06f16e00-740b-11eb-8c66-d8928k23fa"}]
                }
                setUser(response.data[0]);
                setCurrentProject(response?.data[0]?.projects[0]);
                setLoading(false);
            }
         }
        
    }

    const fetchAllUsers = async() => {
        const url = "http://localhost:8080/" + `${BACKEND_API_URL}/users/getUsers`;
        const response = await axios.get(url);
        console.log(response);
        setUsers(response.data);

    }

    const fetchAllProjects = async() => {
        const url = "http://localhost:8080/" + `${BACKEND_API_URL}/projects`;
        const response = await axios.get(url);
        if (response.data) {
            setProjects(response.data);
        }
       
    }

    const addProject = () => {

        const project = {
            projectName: "New Test Project",
            projectId: uuid(),
            tasks: {
                toDo: [],
                inProgress: [],
                complete: []
            }

        }
        let temp = user;
        temp.projects = [...temp.projects, ...[project]];
        setUser(temp);
        let temp1 = users.filter(user1 => user1.id !== temp.id);
        setUsers([...temp1, ...[temp]])
        setProjects([...projects, ...[project]]);
    }

    const getUsersForProject = () => {
        return users.filter(user => user.projects.some(project => project.projectId === currentProject.projectId));
    }

    console.log("currProj", currentProject);

    const getUserTasks = () => {
        //console.log("what does this give", projects.filter(project => project?.projectId === currentProject?.projectId))
        let tasks =  projects.filter(project => project?.projectId === currentProject?.projectId)[0]?.tasks;
        if (tasks) {
            //console.log("tasks", tasks);
            tasks.toDo = tasks?.toDo?.filter(item => item.assignee === user?.id);
            tasks.inProgress = tasks?.inProgress?.filter(item => item.assignee === user?.id);
            tasks.completed = tasks?.completed?.filter(item => item.assignee === user?.id);
        }
        
        return tasks;
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
            <ProjectPane projects={user?.projects} currentProject={currentProject} setCurrentProject={setCurrentProject} users={getUsersForProject()} currentUser={user} addProject={addProject}/>
            {/* <ParticipantsPane /> */}
            <NavBar currentProject={currentProject} tasks={currentProject?.tasks} currentUser={user} users={users}/>
            {/* YOU NEED TO SWITCH BETWEEN CALENDAR, TASK DASHBOARD, AND CHAT VIEW */}
            <TaskView tasks={getUserTasks()}  />
        </div>
    );
}

export default WorkspaceContainer;