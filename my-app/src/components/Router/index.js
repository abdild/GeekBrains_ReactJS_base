// import { Switch } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
// import React from "react";
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from "../Home";
import { Profile } from "../Profile";
import { News } from "../News";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import RestoreIcon from '@material-ui/icons/Chat';
import ChromeReaderModeIcon from '@material-ui/icons/ChromeReaderMode';
import { makeStyles } from '@material-ui/core/styles';
import { PrivateRoute } from '../../hocs/PrivateRoute';
import { PublicRoute } from '../../hocs/PublicRoute';
import { Login } from "../Login";

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export const Router = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const [isAuthed, setIsAuthed] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                setIsAuthed(true);
            } else {
                setIsAuthed(false);
            }
        });
    }, []);

    return (
        <BrowserRouter>
            <BottomNavigation value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}>
                <Link to="/home"><BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />Home</Link>
                <Link to="/profile"><BottomNavigationAction label="Profile" value="profile" icon={<PersonIcon />} />PROFILE</Link>
                <Link to="/chats"><BottomNavigationAction label="Chats" value="chats" icon={<RestoreIcon />} />CHATS</Link>
                <Link to="/news"><BottomNavigationAction label="News" value="news" icon={<ChromeReaderModeIcon />} />NEWS</Link>
            </BottomNavigation>

            {/* <ul>
                <li>
                    <Link to="/home">home</Link>
                </li>
                <li>
                    <Link to="/profile">profile</Link>
                </li>
                <li>
                    <Link to="/chats">chats</Link>
                </li>
            </ul> */}

            <Switch>

                <PrivateRoute
                    authed={isAuthed}
                    path="/profile">
                    <Profile />
                </PrivateRoute>

                {/* <PrivateRoute
                    authed={isAuthed}
                    path="/profile"
                    render={(data) => (
                        <Profile match={data.match} history={data.history} />
                    )}
                /> */}

                <PrivateRoute
                    authed={isAuthed}
                    path="/home/:chatId?" component={Home}>
                </PrivateRoute>

                <PublicRoute
                    authed={isAuthed}
                    path="/news">
                    <h1>Black Messenger</h1>
                    <News />
                </PublicRoute>

                <PrivateRoute
                    authed={isAuthed}
                    path="/nochat">
                    <h1>Black Messenger</h1>
                    <div className="MainWindow">
                        <div className="page404">
                            <span style={{ fontSize: 20 }}>Несуществующий чат</span>
                            <Link to="/home">На главную</Link>
                        </div>
                    </div>
                </PrivateRoute>

                <Route exact path="/">
                    <h1>Black Messenger</h1>
                    <div className="MainWindow">
                        <div className="page404">
                            Добро пожаловать!
                            <br />
                            Это Black Messenger
                            <br />
                            Нажмите кнопку меню сверху для перехода в соответствующий раздел.
                        </div>
                    </div>
                </Route>

                <PublicRoute
                    authed={isAuthed}
                    exact path="/login">
                    <h1>Black Messenger</h1>
                    <div className="MainWindow">
                        <div className="page404">
                            <Login />
                        </div>
                    </div>
                </PublicRoute>

                <PublicRoute
                    authed={isAuthed}
                    exact path="/signup">
                    <h1>Black Messenger</h1>
                    <div className="MainWindow">
                        <div className="page404">
                            <Login isSignUp />
                        </div>
                    </div>
                </PublicRoute>

                <Route path='*'>
                    <h1>Black Messenger</h1>
                    <div className="MainWindow">
                        <div className="page404">
                            <span style={{ fontSize: 200 }}>404</span>
                            <br />
                            Страница не найдена
                        </div>
                    </div>
                </Route>

            </Switch>
        </BrowserRouter >
    )
}