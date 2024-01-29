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
                const newMsg = "[ " + message.user + " ] " + message.text
                setMessages(prev => [...prev, newMsg]);
            } else if (message.type === 1) { // InputSignal
                setIsProgressing(true);
            }
        };
        setWs(socket);
        return () => socket.close();
    }, [setIsProgressing]);

    const sendMessage = () => {
        if (ws && input.trim()) {
            if (userName === '') {

            }
            ws.send(JSON.stringify({type: 0, user: userName, text: input}));
            const inputWithUserName = userName === "" ? input : "[ " + userName + " ] " + input
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
