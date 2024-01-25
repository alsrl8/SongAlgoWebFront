import Chat from "./Chat";
import {useState} from "react";

const Chatter = () => {
    const [userName, setUserName] = useState('');
    return <Chat userName={userName} setUserName={setUserName}/>
}

export default Chatter