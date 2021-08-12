import React, { useState, useRef, useEffect } from 'react';
import { AUTHORS } from '../../constants';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { TextField } from '@material-ui/core';
import { AddChat } from '../ChatsList/AddChat';
import { useInput } from '../../utils/useInput';

export const Form = (props) => {
    const onSendMessage = props.onSendMessage;
    //тоже самое: const { onSendMessage } = props;

    const resetMessages = props.resetMessages;

    // const [value, setValue] = useState('');

    const inputRef = useRef();
    useEffect(() => {
        inputRef.current.focus();
    }, [inputRef]);

    const { value, handleChange, reset } = useInput('');

    // const handleChange = (event) => {
    //     setValue(event.target.value);
    // };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value !== '') { // Проверка на отправку не пустой строки
            onSendMessage({
                // author: AUTHORS.human,
                id: Date.now(),
                text: value,
            });
            // setValue('');
            reset();
        }
    };

    const handleReset = (event) => {
        event.preventDefault();
        resetMessages({
            text: "Чат очищен!",
            author: AUTHORS.robot,
            id: Date.now(),
        });
    };

    return (
        <>
            <form className="ChatForm" onSubmit={handleSubmit}>
                <TextField inputRef={inputRef} className="ChatText" id="filled-basic" label="Filled" variant="filled" label="Введите текст" value={value} onChange={handleChange} />
                {/* <input type="text" className="ChatText" value={value} onChange={handleChange} /> */}
                <ButtonGroup variant="contained" aria-label="contained primary button group">
                    <Button type="submit" className="ChatButton" variant="contained" color="primary">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 13L9 17L19 7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                    <Button className="ChatButton" variant="contained" color="secondary" onClick={handleReset}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 6L18 18M6 18L18 6L6 18Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </Button>
                </ButtonGroup>
            </form>
        </>
    )
}