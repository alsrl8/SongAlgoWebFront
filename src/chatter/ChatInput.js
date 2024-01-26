import React from 'react';
import {Button, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatInput = ({input, setInput, sendMessage, sendInputSignal, iconColor, isChatInputValid}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <TextField
                error={!isChatInputValid}
                helperText={isChatInputValid ? '' : 'Please log in first to send a message'}
                fullWidth
                variant="outlined"
                label="Type a message"
                value={input}
                onChange={(e) => {
                    sendInputSignal()
                    setInput(e.target.value)
                }}
                onKeyUp={(e) => e.key === 'Enter' && sendMessage()}
            />
            <Button variant="text" onClick={sendMessage}>
                <SendIcon style={{color: iconColor}}/>
            </Button>
        </div>
    );
};

export default ChatInput;
