import React, {useState} from 'react';
import {Container, useTheme} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import useWebSocket from './useWebSocket';
import ChatMessageList from './ChatMessageList';
import ChatInput from './ChatInput';
import {getChatterIconColor} from "../utils/chatter";
import ChatProgress from "./ChatProgress";

const Chat = () => {
    const [input, setInput] = useState('');
    const [isProgressing, setIsProgressing] = useState(false);
    const {ws, messages, sendMessage} = useWebSocket(input, setInput);
    const theme = useTheme();
    const iconColor = getChatterIconColor(ws) !== '' ? getChatterIconColor(ws) : theme.palette.primary.main;

    return (
        <Container maxWidth="sm">
            <ChatIcon
                style={{display: 'flex', margin: '20px', marginBottom: '40px', fontSize: '4rem', color: iconColor}}/>
            <ChatMessageList messages={messages}/>
            <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} iconColor={iconColor}/>
            <ChatProgress isProgressing={isProgressing} />
        </Container>
    );
};

export default Chat;
