import {useEffect, useState} from 'react';

const useWebSocket = (input, setInput) => {
    const [ws, setWs] = useState(null);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const socket = new WebSocket(process.env.REACT_APP_CHAT_SERVER_URL);
        socket.onmessage = message => {
            setMessages(prev => [...prev, message.data]);
        };
        setWs(socket);
        return () => socket.close();
    }, []);

    const sendMessage = () => {
        if (ws && input.trim()) {
            ws.send(input);
            setInput('');
        }
    };

    return {ws, messages, sendMessage};
};

export default useWebSocket;
