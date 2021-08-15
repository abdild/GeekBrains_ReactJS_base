import React, { useState } from "react";
import { store } from "../../store";
import { PROFILE_CHECK, PROFILE_SET_NAME, PROFILE_TOGGLE_SHOW } from "../../store/profile/actionTypes";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button, Typography } from "@material-ui/core";
import { TextField } from '@material-ui/core';
import { changeName } from "../../store/profile/actions";
import { selectName } from "../../store/profile/selectors";

export const Profile = () => {
    const profileState = useSelector((state) => state.profile);
    // const name = useSelector((state) => state.name);
    const name = useSelector(selectName);
    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // dispatch({
        //     type: PROFILE_SET_NAME,
        //     // name: value,
        //     payload: value,
        // });
        dispatch(changeName(value));
        setValue('');
    };

    const handleCheckPoint = () => {
        dispatch({
            type: PROFILE_CHECK,
        });
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <>
            <h1>Black Messenger</h1>
            <div className="MainWindow">
                <div className="page404">THIS IS PROFILE OF {name}</div>
                <form onSubmit={handleSubmit} className="ChatForm">
                    <TextField className="ChatText" id="filled-basic" label="Filled" variant="filled" label="Введите имя" value={value} onChange={handleChange} />
                    <Button onClick={handleSubmit} variant="contained" color="primary">Сохранить</Button>
                </form>
                <div>
                    <FormControlLabel style={{ color: 'white' }}
                        control={
                            <Checkbox
                                checked={profileState.checked}
                                onChange={handleCheckPoint}
                                // name="checkedB"
                                color="primary"
                                style={{
                                    color: "#00e676",
                                }}
                            />
                        }
                        label={<Typography variant="h6" style={{ color: '#2979ff' }}>Check this checkbox</Typography>}
                    />
                </div>
                {profileState.checked && <div className="page404">Check</div>}
            </div>
        </>
    );
};