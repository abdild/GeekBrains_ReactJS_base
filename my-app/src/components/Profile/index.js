// import React from 'react';
// import { store } from '../../store';
// import { PROFILE_TOGGLE_SHOW } from "../../store/actionTypes";

// export const Profile = () => {
//     // const profileState = store.getState();
//     // console.log(profileState);
//     const profileState = useSelector((state) => state);
//     const dispatch = useDispatch();

//     const toggleShow = () => {
//         dispatch({
//             type: PROFILE_TOGGLE_SHOW,
//         });
//     };
//     console.log(profileState);

//     return (
//         <>
//             <div className="page404">THIS IS PROFILE PAGES</div>
//             <button onClick={toggleShow}>TOGGLE show</button>
//         </>

//     )
// };

import React, { useState } from "react";
import { store } from "../../store";
import { PROFILE_CHECK, PROFILE_TOGGLE_SHOW } from "../../store/actionTypes";
import { useSelector, useDispatch } from "react-redux";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Typography } from "@material-ui/core";

export const Profile = () => {
    const profileState = useSelector((state) => state);
    const dispatch = useDispatch();

    const toggleShow = () => {
        dispatch({
            type: PROFILE_TOGGLE_SHOW,
        });
    };
    
    const handleCheckPoint = () => {
        dispatch({
            type: PROFILE_CHECK,
        });
    };

    return (
        <>
            <div className="page404">THIS IS PROFILE PAGES</div>
            <button onClick={toggleShow}>TOGGLE show</button><div>
                {/* <Checkbox
                    checked={checked}
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                    label={<div className="page404">On</div>}
                /> */}
                <FormControlLabel style={{color: 'white'}}
                    control={
                        <Checkbox
                            checked={profileState.checked}
                            onChange={handleCheckPoint}
                            // name="checkedB"
                            color="primary"
                            style ={{
                                color: "#00e676",
                              }}
                        />
                    }
                    label={<Typography variant="h6" style={{ color: '#2979ff' }}>Check this checkbox</Typography>}
                />
            </div>
            {profileState.checked && <div className="page404">Check</div>}
            {profileState.show && <div className="page404">THIS DEPENDS ON GLOBAL REDUX STATE</div>}
        </>
    );
};