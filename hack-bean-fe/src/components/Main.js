import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BACKEND_API_URL = "https://11c8a7c1c9e8.ngrok.io/api"

function Test() {

  const [contacts, setContacts] = useState([]);

  const fetchContacts = async() => {
    const response = await axios.get(`${BACKEND_API_URL}/characters`);
    // setContacts(response.data.map(item => item.name));
  }
  useEffect(() => {
    fetchContacts();

  }, [])
  return (
  <div style = {{padding: "10vh", paddingBottom: "0"}}>
      <h1 style={{margin: "0", fontSize:"4em"}}>Hack Beanpot 2021</h1> 
      <h2>RAM^2</h2>
      <h3>For more productive planning, together.</h3>
      {contacts.map((contact, index) => {
        return (
          <h1 style={{color: "black", textAlign: 'center'}}key={index}>{contact}</h1>
        )
      })}
  </div>
  )
}

export default Test;
