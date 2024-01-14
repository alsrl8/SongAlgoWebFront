import React from 'react';
import {TextField, Button, useTheme} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const ChatInput = ({ws, input, setInput, sendMessage}) => {
    const theme = useTheme();
    const iconColor = ws ? theme.palette.primary.main : 'grey'

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
