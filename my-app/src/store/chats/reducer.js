import { AUTHORS } from "../../constants";
import { ADD_CHAT, DELETE_CHAT, SEND_MESSAGE } from "./actionTypes";

const initialState = {
    chat1: {
        messages: [{ text: "Привет! Это чат 1", author: AUTHORS.human, id: 'chat1-1' }],
        name: "Чат #1",
        id: "chat1"
    },
    chat2: {
        messages: [{ text: "Привет! Это чат 2", author: AUTHORS.human, id: 'chat1-1' }],
        name: "Чат #2",
        id: "chat2"
    },
    chat3: {
        messages: [],
        name: "Чат #3",
        id: "chat3"
    },
};

export const chatsReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_CHAT: {
            return {
                ...state,
                [payload.chatId]: {
                    name: payload.name,
                    id: payload.chatId,
                    messages: [],
                },
            };
        }
        case DELETE_CHAT: {
          const newState = { ...state };
          delete newState[payload];    
          return newState;
        }
        case SEND_MESSAGE: {
            return {
                ...state,
                [payload.chatId]: {
                    ...state[payload.chatId],
                    messages: [...state[payload.chatId].messages, payload.message],
                },
            };
        }
        default:
            return state;
        }
};