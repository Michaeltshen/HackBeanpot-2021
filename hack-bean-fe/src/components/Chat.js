import React, { useEffect, useState } from 'react';
import io from "socket.io-client";



const ENDPOINT = 'https://b1e082a77b5c.ngrok.io';

function Chat(props) {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const socket = io(ENDPOINT, { transports: ['websocket', 'polling', 'flashsocket'] });
        socket.on('join', (message) => {
            console.log(message)
        });

        socket.on('message', message => {
            setMessages([...messages, ...[message]]);
        });

        socket.emit('sendMessage', { message }, () => setMessage(''))
    }, []);

    const updateMessage = (event) => {
        setMessage(event.target.value);
    }

    return (
        <>
            <div style={{ marginLeft: '100px', height: '200px', border: '1px solid black', width: '100%' }}>

            </div>
            <div>
                <input onClick={updateMessage} style={{ width: '100%', marginLeft: '100px' }}></input>
            </div>
        </>
    )



}

export default Chat;