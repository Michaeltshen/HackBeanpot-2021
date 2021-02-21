import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import './CreateButton.css'

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

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [projectName, setProjectName] = React.useState("");

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const body = (
    <div id = "projectForm" style={modalStyle} className={classes.paper}>
      <h1 id="simple-modal-title" style={{fontSize:"2em", textAlign:"center"}}>Create Your Project</h1>
      <label> Name: </label>
      <input type="text" name="name" /> 
      <p></p>
      <label> Email: </label>
      <input type="text" name="email" />
      <p></p>
      <label> Project Name: </label>
      <input type="text" name="projName" />
      <p></p>
      <label> Google Calendar Link (Optional): </label>
      <input type="text" name="calLink" />
      <p></p>
      <button id="projectSubmit">Submit</button>
      <p></p>
    </div>
  );

  return (
    <div className="mainButton" id="CreateButton">
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