import React, { useState } from 'react';
import { AUTHORS } from '../../constants';

export const Form = (props) => {
    const onSendMessage = props.onSendMessage;
    // const { onSendMessage } = props;

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSendMessage({
            author: AUTHORS.human,
            id: Date.now(),
            text: value,
        });
        setValue('');
    }

    return (
        <form className="ChatForm" onSubmit={handleSubmit}>
            <input type="text" className="ChatText" value={value} onChange={handleChange} />
            <button type="submit" className="ChatButton">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 19L21 21L12 3L3 21L12 19ZM12 19V11" stroke="#3F3F46" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </form>
    )
}