import React from 'react';
import {Button, TextField} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatInput = ({input, setInput, sendMessage, iconColor}) => {
    return (
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <TextField
                fullWidth
                variant="outlined"
                label="Type a message"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyUp={(e) => e.key === 'Enter' && sendMessage()}
            />
            <Button variant="text" onClick={sendMessage}>
                <SendIcon style={{color: iconColor}}/>
            </Button>
        </div>
    );
};

export default ChatInput;
