import {Box, Typography} from "@mui/material";

const ChatProgress = ({isProgressing}) => {
    return isProgressing && ( <Box display="flex" alignItems="center" style={{margin: '10px'}}>
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