import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './CreateButton.css'
import axios from 'axios';
import {v1 as uuid} from "uuid"; 


function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50;
  const left = 50;
  
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
    backgroundColor: "#b5dafe",
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 550,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const BACKEND_API_URL = "https://11c8a7c1c9e8.ngrok.io/api"

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [projectName, setProjectName] = useState("");
  const [calendarLink, setCalendarLink] = useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createUserData = async() => {

    const id = uuid();
    console.log(id);
    localStorage.setItem("userId", id);
    const projects = [{projectId: uuid(), projectName}];
    console.log({name, email, projects, calendarLink, id});
    const url = "https://cors-anywhere.herokuapp.com/" + `${BACKEND_API_URL}/users/createUser`;
    const response = await axios.post(url, {name, email, projects, calendarLink, id});
    if (response) {
      window.location.replace("/workspace?userId=" + id);
    }


  }


  const body = (
    <div id = "projectForm" style={modalStyle} className={classes.paper}>
      <h1 id="simple-modal-title" style={{fontSize:"2em", textAlign:"center"}}>Create Your Project</h1>
      <label> Name: </label>
      <input onChange={(e) => setName(e.target.value)}type="text" name="name" /> 
      <p></p>
      <label> Email: </label>
      <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" />
      <p></p>
      <label> Project Name: </label>
      <input onChange={(e) => setProjectName(e.target.value)}type="text" name="projName" />
      <p></p>
      <label> Google Calendar Link (Optional): </label>
      <input onChange={(e) => setCalendarLink(e.target.value)} type="text" name="calLink" />
      <p></p>
      <button onClick={createUserData}id="projectSubmit">Submit</button>
      <p></p>
    </div>
  );

  return (
    <div id="CreateButton">
      <button type="button" onClick={handleOpen}>
        New User? Create a Project
      </button>
      <Modal
        open={open}
        onClose={handleClose}
      >
        {body}
      </Modal>
    </div>
  );
}