import './Home.css';
import { useCallback } from 'react';
import { MessageList } from '../MessageList';
import { Form } from '../Form';
import { ChatList } from '../ChatsList';
import { Redirect, useHistory, useParams } from 'react-router-dom';
import { AddChat } from '../ChatsList/AddChat';
import { useDispatch, useSelector } from 'react-redux';
import { deleteChat, sendMessageWithReply } from '../../store/chats/actions';
import { selectName } from '../../store/profile/selectors';

function Home() {
    const { chatId } = useParams();
    const history = useHistory();

    const chats = useSelector(state => state.chats);
    const name = useSelector(selectName);
    const dispatch = useDispatch();

    const handleSendMessage = useCallback((newMessage) => {
        dispatch(sendMessageWithReply(chatId, { ...newMessage, author: name }));
    }, [chatId]
    );

    const handleDeleteChat = useCallback((id) => {
        dispatch(deleteChat(id));
    }, []);

    if (!!chatId && !chats[chatId]) {
        // return <Redirect to="/nochat" />
        history.replace('/nochat');
    };

    return (
        <>
            <h1>Black Messenger</h1>
            <div className="MainWindow">
                <AddChat />
                <div className="ChatWindow">
                    <div className="ChatList ScrollBarStyle">
                        <span style={{ fontSize: 18, fontWeight: 700 }}>Список чатов</span>
                        <ChatList chats={chats} onDeleteChat={handleDeleteChat} />
                    </div>
                    <div className="ChatMessages ScrollBarStyle">
                        {!!chatId && chats[chatId] && <MessageList messages={chats[chatId].messages} />}
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
