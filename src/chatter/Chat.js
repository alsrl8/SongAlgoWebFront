import React, {useState} from 'react';
import {Container, useTheme} from '@mui/material';
import useWebSocket from './useWebSocket';
import ChatMessageList from './ChatMessageList';
import ChatInput from './ChatInput';
import {getChatterIconColor} from "../utils/chatter";
import ChatProgress from "./ChatProgress";
import ChatHeader from "./ChatHeader";

const Chat = ({userName, setUserName}) => {
    const [input, setInput] = useState('');
    const [isProgressing, setIsProgressing] = useState(false);
    const {ws, messages, sendMessage, sendInputSignal} = useWebSocket(userName, input, setInput, setIsProgressing);
    const theme = useTheme();
    const iconColor = getChatterIconColor(ws) !== '' ? getChatterIconColor(ws) : theme.palette.primary.main;
    const [isChatInputValid, setIsChatInputValid] = useState(false);

    return (
        <Container maxWidth="sm">
            <ChatHeader userName={userName} setUserName={setUserName} iconColor={iconColor} setIsChatInputValid={setIsChatInputValid}/>
            <ChatMessageList messages={messages}/>
            <ChatInput input={input} setInput={setInput} sendMessage={sendMessage} sendInputSignal={sendInputSignal}
                       iconColor={iconColor} isChatInputValid={isChatInputValid}/>
            <ChatProgress isProgressing={isProgressing} setIsProgressing={setIsProgressing}/>
        </Container>
    );
};

export default Chat;
