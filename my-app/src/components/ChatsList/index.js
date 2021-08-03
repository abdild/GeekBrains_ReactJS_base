import { ListItem, ListItemText } from '@material-ui/core';
import React, { useCallback } from 'react';
import ChatIcon from '@material-ui/icons/Chat';

export const ChatList = ({ chats }) => {
    const renderChatList = useCallback((chats) => (
        <ListItem button>
            <ChatIcon className="icons"></ChatIcon>
            <ListItemText primary={chats.name} key={chats.id} />
        </ListItem>
    ), []);

    return chats.map(renderChatList)
};
