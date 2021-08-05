// import { Switch } from "@material-ui/core";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import React from "react";
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from "../Home";
import { Profile } from "../Profile";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import RestoreIcon from '@material-ui/icons/Chat';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        width: '100%',
    },
});

export const Router = () => {

    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BrowserRouter>
            <BottomNavigation value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels
                className={classes.root}>
                <Link to="/home"><BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} /></Link>
                <Link to="/profile"><BottomNavigationAction label="Profile" value="profile" icon={<PersonIcon />} /></Link>
                <Link to="/chats"><BottomNavigationAction label="Chats" value="chats" icon={<RestoreIcon />} />chats</Link>
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
                <Route path="/home/:chatId?" component={Home}>
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                {/* <Route  path="/chats">
                    <Chats />
                </Route> */}
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
        </BrowserRouter>
    )
}