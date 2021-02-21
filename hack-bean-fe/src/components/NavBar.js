import React, {useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Calendar from "@ericz1803/react-google-calendar";
import Drawer from '@material-ui/core/Drawer';
import Chat from './Chat';


const API_KEY = "AIzaSyAqdfAT3JX4Moek7_d2vdnGOVqH1Z1D6BY";
let calendars = [
    { calendarId: "ritikgupta9@gmail.com" },
];

const appBar = {
    width: `calc(100% - 475px)`,
    marginLeft: '300px',
    marginRight: '175px'

}

function NavBar(props) {

    const currentProject = props.currentProject;
    const [renderChat, setRenderChat] = useState(false);
    const renderContent = () => {
        if (renderChat) {
            return (
                <Chat/>
            )
        }
        return (
            <Calendar apiKey={API_KEY} calendars={calendars} style={{width: `calc(100% - 475px)`}}  />
        )
    }
    return (
        <div>
            <AppBar position="fixed" style={appBar}>
                <div style={{background:"#78a5cd"}}>
                    <p style={{textAlign: 'center'}}>{`${currentProject?.projectName} CHAT - [COOL KIDS]`}</p>
                </div>
            </AppBar>
            <div
                style={{
                    paddingTop: "75px",
                    paddingBottom: "75px",
                    //margin: "auto",
                    width: `calc(100% - 475px)`,
                    marginLeft: '300px',
                    marginRight: '175px',
                    

                }}
            >
                {renderContent()}
            </div>
        </div>

    );
}

export default NavBar;