import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from "redux-persist/lib/storage";

import { chatsReducer } from './chats/reducer';
import { middleware } from './middlewares';
import { profileReducer } from './profile/reducer';
import { articlesReducer } from './articles/reducer';

const persistConfig = {
  key: 'Black messenger',
  storage,
};

const rootReducer = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
  articles: articlesReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  persistedReducer,  
  composeEnhancers(applyMiddleware(thunk)),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);