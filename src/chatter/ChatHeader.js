import ChatIcon from "@mui/icons-material/Chat";
import React from "react";
import {Grid} from "@mui/material";
import Auth from "../auth";

const ChatHeader = ({iconColor}) => {
    return (
        <Grid container>
            <Grid item>
                <ChatIcon
                    style={{
                        display: 'flex',
                        margin: '20px',
                        marginBottom: '40px',
                        fontSize: '4rem',
                        color: iconColor
                    }}/>
            </Grid>
            <Grid item>
                <Auth/>
            </Grid>
        </Grid>
    );
}

export default ChatHeader