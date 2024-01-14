import React, {useState} from 'react';
import {Container, useTheme} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import useWebSocket from './useWebSocket';
import ChatMessageList from './ChatMessageList';
import ChatInput from './ChatInput';

const Chat = () => {
    const [input, setInput] = useState('');
    const {ws, messages, sendMessage} = useWebSocket(input, setInput);
    const theme = useTheme();
    const iconColor = ws ? theme.palette.primary.main : 'grey'

    return (
        <Container maxWidth="sm">
            <ChatIcon
                style={{display: 'flex', margin: '20px', marginBottom: '40px', fontSize: '4rem', color: iconColor}}/>
            <ChatMessageList messages={messages}/>
            <ChatInput ws={ws} input={input} setInput={setInput} sendMessage={sendMessage}/>
        </Container>
    );
};

export default Chat;
