import {Box, Typography} from "@mui/material";
import {useEffect, useRef} from "react";

const ChatProgress = ({isProgressing, setIsProgressing}) => {
    const timeoutDelay = 1000; // timeout in ms
    const timeoutTimerRef = useRef();

    useEffect(() => {
        if (isProgressing) {
            clearTimeout(timeoutTimerRef.current);
            timeoutTimerRef.current = setTimeout(() => {
                setIsProgressing(false);
            }, timeoutDelay);
        }
        return () => {
            clearTimeout(timeoutTimerRef.current);
        };
    }, [isProgressing, setIsProgressing, timeoutDelay]); // Add timeoutDelay to the dependency array if its value can change over time

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