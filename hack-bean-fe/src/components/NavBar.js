import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar';
import Calendar from "@ericz1803/react-google-calendar";
import Drawer from '@material-ui/core/Drawer';
import Chat from './Chat';
import TaskDashboard from './TaskDashboard'
import cotton_candy_scene from '../images/cotton_candy_scene.jpg'
import { Hidden } from '@material-ui/core';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

const API_KEY = "AIzaSyAqdfAT3JX4Moek7_d2vdnGOVqH1Z1D6BY";


const appBar = {
    width: `calc(100% - 475px)`,
    marginLeft: '300px',
    marginRight: '175px'

}
const windowWidth = window.innerWidth


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                {children}
                </>
                
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function NavBar(props) {

    const currentProject = props.currentProject;
    const [renderChat, setRenderChat] = useState(false);
    const [renderTaskDashboard, setRenderTaskDashboard] = useState(true);
    const [value, setValue] = React.useState(0);
    const tasks = props?.tasks;
    const currentUser = props?.currentUser;

    let styles = {
        //you can use object styles (no import required)
        calendar: {
          borderWidth: "3px", 
          transform:"scale(0.90)"
        },
        
      }

    console.log("windowWidth", windowWidth);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    let calendars = [
        { calendarId: currentUser?.calendarLink },
    ];
    return (
        <div>
            <AppBar position="fixed" style={appBar}>
                <div style={{ background: "#78a5cd" }}>
                    <Paper style={{ background: "#78a5cd" }} elevation="5">
                        <Tabs
                            indicatorColor="primary"
                            textColor="primary"
                            centered
                            value={value}
                            onChange={handleChange}
                        >
                            <Tab style={{ color: "white" }} label="Task View" {...a11yProps(0)} />
                            <Tab style={{ color: "white" }} label="Calendar"  {...a11yProps(1)} />
                            <Tab style={{ color: "white" }} label="Chat"  {...a11yProps(2)} />
                        </Tabs>
                    </Paper>
                    {/* <p style={{textAlign: 'center'}}>Campus Hackathon Chat[COOL KIDS]</p> */}
                </div>
            </AppBar>

            <TabPanel value={value} index={0}>
                <div
                    style={{
                        paddingTop: "75px",
                        paddingBottom: "0px",
                        //margin: "auto",
                        width: `calc(100% - 475px)`,
                        marginLeft: '300px',
                        marginRight: '175px',
                        overflow: "hidden"

                    }}>
                    <TaskDashboard tasks={tasks} />
                    </div>
            </TabPanel>
            <TabPanel value={value} index={1}>

            <div
                    style={{
                        paddingTop: "75px",
                        paddingBottom: "0px",
                        paddingLeft: "0px",
                        paddingRight: "0px",
                        //margin: "auto",
                        width: `calc(${windowWidth}px - 475px)`,
                        marginLeft: '300px',
                        marginRight: '175px',
                        //overflow: "hidden"

                    }}>
                <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
                </div>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <div
                    style={{
                        paddingTop: "75px",
                        paddingBottom: "0px",
                        //margin: "auto",
                        width: `calc(100% - 475px)`,
                        marginLeft: '300px',
                        marginRight: '175px',
                        overflow: "hidden",
                        display: 'flex',
                        justifyContent: 'center'

                    }}>
                <Chat currentUser={currentUser}/>
                </div>
            </TabPanel>
        </div>

    );
}

export default NavBar;