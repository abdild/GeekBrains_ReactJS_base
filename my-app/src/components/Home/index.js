import './Home.css';
import { useCallback, useEffect, useState } from 'react';
import { MessageList } from '../MessageList';
import { Form } from '../Form';
import { ChatList } from '../ChatsList';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { AddChat } from '../ChatsList/AddChat';
import { useDispatch, useSelector } from 'react-redux';
import { deleteChat, sendMessageWithReply } from '../../store/chats/actions';
import { selectName } from '../../store/profile/selectors';
import firebase from "firebase";

function Home() {
    const { chatId } = useParams();
    const history = useHistory();

    const [chats, setChats] = useState({});
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const db = firebase.database();
        db.ref("chats").on("value", (snapshot) => {
            // console.log(snapshot);
            let newChats = {};
            snapshot.forEach((snap) => {
                // console.log(snap.val());
                const currentChat = snap.val();
                newChats[currentChat.id] = currentChat;
            });

            setChats(newChats);
        });
    }, []);

    useEffect(() => {
        const db = firebase.database();
        db.ref("messages").on("value", (snapshot) => {
            let newMessages = {};
            if (!snapshot) {
                return;
            }
            snapshot.forEach((snap) => {
                const currentMsgs = snap.val();
                if (newMessages[snap.key]) {
                    newMessages[snap.key].concat(Object.values(currentMsgs));
                } else {
                    newMessages[snap.key] = Object.values(currentMsgs);
                }
            });

            setMessages(newMessages);
        });

        return db.ref("messages").off;
    }, []);

    const addChat = (id, name) => {
        const db = firebase.database();
        db.ref("chats").child(id).set({
            name,
            id,
        });
    };

    const removeChat = (id) => {
        const db = firebase.database();
        db.ref("chats").child(id).remove();
    };

    // const chats = useSelector(state => state.chats);
    const name = useSelector(selectName);
    const dispatch = useDispatch();

    const handleSendMessage = useCallback(
        (newMessage) => {
            const db = firebase.database();
            db.ref("messages")
                .child(chatId)
                .push({
                    ...newMessage,
                    author: name,
                    id: `${chatId}-${Date.now()}`,
                    chatId,
                });
        },
        [chatId, name]
    );

    // const handleSendMessage = useCallback((newMessage) => {
    //     dispatch(sendMessageWithReply(chatId, { ...newMessage, author: name }));
    // }, [chatId]
    // );

    const handleDeleteChat = useCallback((id) => {
        dispatch(deleteChat(id));
    }, []);

    // if (!!chatId && !messages[chatId]) {
    //     // return <Redirect to="/nochat" />
    //     history.replace('/nochat');
    // };

    return (
        <>
            <h1>Black Messenger</h1>
            <div className="MainWindow">
                <AddChat />
                <div className="ChatWindow">
                    <div className="ChatList ScrollBarStyle">
                        <span style={{ fontSize: 18, fontWeight: 700 }}>Список чатов</span>
                        <ChatList chats={chats} onDeleteChat={removeChat} onAddChat={addChat} />
                    </div>
                    <div className="ChatMessages ScrollBarStyle">
                        {/* {!!chatId && chats[chatId] && <MessageList messages={chats[chatId].messages} />} */}
                        {/* {!!chatId && chats[chatId]} */}
                        {!!chatId && <MessageList messages={messages[chatId] || []} />}
                    </div>
                </div>
                <div className="ChatForm">
                    <Form onSendMessage={handleSendMessage} />
                </div>
            </div>
        </>
    );
}

export default Home;
