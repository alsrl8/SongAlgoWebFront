import {useEffect, useState} from 'react';

const useWebSocket = (userName, input, setInput, setIsProgressing) => {
    const [ws, setWs] = useState(null);
    const [messages, setMessages] = useState([]);

    // Handle messages from server
    useEffect(() => {
        const socket = new WebSocket(process.env.REACT_APP_CHAT_SERVER_URL);
        socket.onmessage = serverMsg => {
            const message = JSON.parse(serverMsg.data);
            if (message.type === 0) { // Chat
                setMessages(prev => [...prev, message.text]);
            } else if (message.type === 1) { // InputSignal
                setIsProgressing(true);
            }
        };
        setWs(socket);
        return () => socket.close();
    }, [setIsProgressing]);

    const sendMessage = () => {
        if (ws && input.trim()) {
            ws.send(JSON.stringify({type: 0, user: 'user', text: input}));
            const inputWithUserName = userName === "" ? input : "[ " + userName + "]" + " " + input
            setMessages(prev => [...prev, inputWithUserName])
            setInput('');
        }
    };

    const sendInputSignal = () => {
        if (ws) {
            ws.send(JSON.stringify({type: 1}));
        }
    }

    return {ws, messages, sendMessage, sendInputSignal};
};

export default useWebSocket;
