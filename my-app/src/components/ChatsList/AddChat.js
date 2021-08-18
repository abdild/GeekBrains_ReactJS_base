import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';
import { addChat } from '../../store/chats/actions';
import { Button, IconButton, TextField } from '@material-ui/core';
import { useInput } from '../../utils/useInput';

export const AddChat = ({ onAddChat }) => {
    const dispatch = useDispatch();

    // const [value, setValue] = useState('');

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };

    const { value,handleChange, reset } = useInput('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!value) {
            return;
        };

        const newId = `chat-${Date.now()}`;
        // dispatch(addChat(newId, value));
        onAddChat(newId, value);
        // setValue('');
        reset();
    };

    return (
        <form className="ChatForm" onSubmit={handleSubmit}>
            <TextField className="ChatText" id="filled-basic" label="Filled" variant="filled" label="Введите название нового чата" value={value} onChange={handleChange} />
            <Button type="submit" className="ChatButton" variant="contained" color="primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V12M12 12V18M12 12H18M12 12H6" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </Button>
        </form>
    )
}