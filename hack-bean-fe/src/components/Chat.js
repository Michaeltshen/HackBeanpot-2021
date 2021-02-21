import React, { useEffect, useState } from 'react';
import ChatBox, { ChatFrame } from 'react-chat-plugin';
import './Chat.css';




const ENDPOINT = 'https://11c8a7c1c9e8.ngrok.io';
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


function Chat(props) {
    const currentUser = props?.currentUser;
    const [messages, setMessages] = useState(
        [
            {
                text: 'user2 has joined the conversation',
                timestamp: 1578366389250,
                type: 'notification',
            },
            {
                author: {
                    username: currentUser?.name.split(" ")[0],
                    id: 1,
                    avatarUrl: 'https://image.flaticon.com/icons/svg/2446/2446032.svg',
                },
                text: 'Hi',
                type: 'text',
                timestamp: 1578366393250,
            },
            {
                author: { username: 'user2', id: 2, avatarUrl: null },
                text: 'Show two buttons',
                type: 'text',
                timestamp: 1578366425250,
                buttons: [
                    {
                        type: 'URL',
                        title: 'Yahoo',
                        payload: 'http://www.yahoo.com',
                    },
                    {
                        type: 'URL',
                        title: 'Example',
                        payload: 'http://www.example.com',
                    },
                ],
            },
            {
                author: {
                    username: currentUser?.name.split(" ")[0],
                    id: 1,
                    avatarUrl: 'https://image.flaticon.com/icons/svg/2446/2446032.svg',
                },
                text: "What's up?",
                type: 'text',
                timestamp: 1578366425250,
                hasError: true,
            },
        ],
    )

    const handleOnSendMessage = (message) => {
        setMessages(
            messages.concat({
                author: {
                    username: currentUser?.name.split(" ")[0],
                    id: 1,
                    avatarUrl: 'https://image.flaticon.com/icons/svg/2446/2446032.svg',
                },
                text: message,
                timestamp: +new Date(),
                type: 'text',
            }),
        );
    };

    return (
        
        
        <ChatBox
            messages={messages}
            userId={1}
            onSendMessage={handleOnSendMessage}
            width={`calc(${windowWidth}px - 475px)`}
            height={`calc(${windowHeight}px)`}
        />
    )




}

export default Chat;