import { List, ListItem, ListItemText } from '@material-ui/core';
import React, { useCallback } from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import { Link } from 'react-router-dom';

export const ChatList = ({ chats }) => {
    const renderChatList = useCallback((chats) => (
        <Link className="ChatLink" to={`/home/${chats.id}`}>
                <ChatIcon className="icons"></ChatIcon>
                <ListItemText primary={chats.name} />
            </Link>
    ), []);

    return Object.values(chats).map(renderChatList);

    // return (
    //     <List>
    //         {
    //             Object.values(chats).map((c) => {
    //                 // <ListItem key={c.id}>
    //                 //     <Link to={`/home/${c.id}`}>{c.name}</Link>
    //                 // </ListItem>
    //                 <ListItem button key={c.id}>
    //                     <Link className="ChatLink" to={`/home/${c.id}`}>
    //                         <ChatIcon className="icons"></ChatIcon>
    //                         <ListItemText primary={c.name} />
    //                     </Link>
    //                 </ListItem>
    //             })
    //         }
    //     </List>
    // )
};