import './Home.css';
import { useCallback, useState, useEffect } from 'react';
import { MessageList } from '../MessageList';
import { Form } from '../Form';
import { AUTHORS } from '../../constants';
import { ChatList } from '../ChatsList';
import { useParams } from 'react-router-dom';

const initialChats = {
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

function Home() {
    // console.log(props);
    // const { chatId } = match.params;
    
    const { chatId } = useParams();
    // const chatId = props.match.params.chatId;    
    // const { chatId } = props.match.params; // тоже самое

    // const [messages, setMessages] = useState([]);

    const [chats, setChats] = useState(initialChats);

    const handleSendMessage = useCallback((newMessage) => {
        // setMessages([...messages, newMessage]);
        setChats({
            ...chats,
            [chatId]: {
                ...chats[chatId],
                messages: [...chats[chatId].messages, newMessage]
            },
        });
    }, [chats, chatId]);

    useEffect(() => {
        // Если чат пустой (на старте), то отправляется приветственное сообщение
        // if (messages.length === 0) {
        //     const timeout = setTimeout(() => {
        //         const newMessage = {
        //             text: "Привет! Это новый чат.",
        //             author: AUTHORS.robot,
        //             id: Date.now(),
        //         };

        //         setMessages([...messages, newMessage]);
        //     }, 500);
        // }

        if (
            !chatId ||
            !chats[chatId]?.messages.length ||
                chats[chatId].messages[chats[chatId].messages.length - 1].author === AUTHORS.robot
        ) {
            return;
        }
        

        const timeout = setTimeout(() => {
            const newMessage = {
                text: "Я робот.",
                author: AUTHORS.robot,
                id: Date.now(),
            };

            handleSendMessage(newMessage);

            // setMessages([...messages, newMessage]);
        }, 1000);

        return () => clearTimeout(timeout);
    }, [chats]);


    // const resetMessageList = useCallback(() => {
    //   const newMessage = {
    //     text: "Чат очищен!",
    //     author: AUTHORS.robot,
    //     id: Date.now(),
    //   };

    //   setMessages([messages, newMessage]);

    // }, [messages]);

    // const resetMessageList = useCallback((newMessage) => {
    //     setMessages([messages, newMessage]);
    // }, [messages]);

    return (
        <>
            <h1>Black Messenger</h1>
            <div className="MainWindow">
                <div className="ChatWindow">
                    <div className="ChatList ScrollBarStyle">
                        <span style={{ fontSize: 18, fontWeight: 700 }}>Список чатов</span>
                        <ChatList chats={chats} />
                    </div>
                    <div className="ChatMessages ScrollBarStyle">
                        {!!chatId && <MessageList messages={chats[chatId].messages} />}
                    </div>
                </div>
                <div className="ChatForm">
                    <Form onSendMessage={handleSendMessage} />
                    {/* <Form onSendMessage={handleSendMessage} resetMessages={resetMessageList} /> */}

                    {/* <Button className="ChatButton" variant="contained" color="secondary" onClick={resetMessageList}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L18 18M6 18L18 6L6 18Z" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button> */}
                </div>
            </div>
        </>
    );
}

export default Home;
