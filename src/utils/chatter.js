const WebSocketReadyState = {
    CONNECTING: 0,
    OPEN: 1,
    CLOSING: 2,
    CLOSED: 3
};

export const getChatterIconColor = (ws) => {
    if (ws === null) return 'grey'
    else if (ws.readyState === WebSocketReadyState.CLOSED || ws.readState === WebSocketReadyState.CLOSING) return 'grey'
    else if (ws.readyState === WebSocketReadyState.CONNECTING) return 'grey'
    return ''
}