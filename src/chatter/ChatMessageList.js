import React, {useEffect, useRef} from 'react';
import {List, ListItem, ListItemText} from '@mui/material';
import './ChatMessageList.css';

const ChatMessageList = ({messages}) => {
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    return (
        <List className='chat-message-list'>
            {messages.map((message, index) => (
                <ListItem key={index}>
                    <ListItemText primary={message}/>
                </ListItem>
            ))}
            <div ref={messagesEndRef}/>
        </List>
    );
};

export default ChatMessageList;
