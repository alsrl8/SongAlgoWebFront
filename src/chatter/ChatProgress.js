import {Box, Typography} from "@mui/material";
import {useEffect} from "react";

const ChatProgress = ({isProgressing, setIsProgressing}) => {
    const timeoutDelay = 1000; // timeout in ms
    let timeoutTimer = null;

    useEffect(() => {
        if (isProgressing) {
            clearTimeout(timeoutTimer);
            timeoutTimer = setTimeout(() => {
                setIsProgressing(false);
            }, timeoutDelay);
        }
        return () => {
            clearTimeout(timeoutTimer);
        };
    }, [isProgressing]);

    return isProgressing && (<Box display="flex" alignItems="center" style={{margin: '10px'}}>
        <Box
            width={10}
            height={10}
            bgcolor="success.main"
            borderRadius="50%"
            display="inline-block"
            mr={1}
        />
        <Typography variant="caption">Someone is typing...</Typography>
    </Box>);
}

export default ChatProgress