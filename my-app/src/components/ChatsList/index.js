import { Divider, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import React, { useCallback } from 'react';
import ChatIcon from '@material-ui/icons/Chat';

export const ChatList = ({ chats }) => {
    const renderChatList = useCallback((chats) => (
        <ListItem button>
            <ChatIcon className="icons"></ChatIcon>
            <ListItemText primary={chats.name} />
        </ListItem>
        // <Message text={message.text} author={message.author} id={message.id} key={message.id} />
    ), []);

    return chats.map(renderChatList)
};
