import { Switch } from "@material-ui/core";
import React from "react";

export const Routes = () => {
    return (
//         <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
//   <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
//   <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
//   <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
//   <BottomNavigationAction label="Folder" value="folder" icon={<FolderIcon />} />
// </BottomNavigation>
        <BrowserRouter>
        <Switch>

            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/profile">
                <Profile />
            </Route>

            <Route exact path="/chats">
                <Chats />
            </Route>

            <Route>
                <h2>Страница не найдена</h2>
            </Route>

        </Switch>
        </BrowserRouter>
    )
}