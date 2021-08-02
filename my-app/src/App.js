import './App.css';
import { useCallback, useState, useEffect } from 'react';
import { MessageList } from './components/MessageList';
import { Form } from './components/Form';
import { AUTHORS } from './constants';
import { Button, ListItem } from '@material-ui/core';
import SimpleList, { ChatList } from './components/ChatsList';

function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = useCallback((newMessage) => {
    setMessages([...messages, newMessage]);
  }, [messages]);

  useEffect(() => {
    // Если чат пустой (на старте), то отправляется приветственное сообщение
    if (messages.length === 0) {
      const timeout = setTimeout(() => {
        const newMessage = {
          text: "Привет! Это новый чат.",
          author: AUTHORS.robot,
          id: Date.now(),
        };

        setMessages([...messages, newMessage]);
      }, 500);
    }

    if (
      !messages.length ||
      messages[messages.length - 1].author === AUTHORS.robot
    ) {
      return;
    }

    const timeout = setTimeout(() => {
      const newMessage = {
        text: "Я робот.",
        author: AUTHORS.robot,
        id: Date.now(),
      };

      setMessages([...messages, newMessage]);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [messages]);


  // const resetMessageList = useCallback(() => {
  //   const newMessage = {
  //     text: "Чат очищен!",
  //     author: AUTHORS.robot,
  //     id: Date.now(),
  //   };

  //   setMessages([messages, newMessage]);

  // }, [messages]);

  const resetMessageList = useCallback((newMessage) => {
    setMessages([messages, newMessage]);
  }, [messages]);

  const chats = [
    { name: 'Чат 1', id: '1' },
    { name: 'Чат 2', id: '2' },
    { name: 'Чат 3', id: '3' },
    { name: 'Чат 4', id: '4' },
    { name: 'Чат 5', id: '5' },
    { name: 'Чат 6', id: '6' },
    { name: 'Чат 7', id: '7' },
    { name: 'Чат 8', id: '8' },
    { name: 'Чат 9', id: '9' },
    { name: 'Чат 10', id: '10' },
    { name: 'Чат 11', id: '11' },
    { name: 'Чат 12', id: '12' }
  ];

  return (
    <>
      <h1>Black Messenger</h1>
      <div className="MainWindow">
        <div className="ChatWindow">
          <div className="ChatList ScrollBarStyle">
            <ChatList chats={chats}></ChatList>
          </div>
          <div>
            <div className="ChatMessages ScrollBarStyle">
              <MessageList messages={messages} />
            </div>
          </div>
        </div>
        <div className="ChatForm">
          <Form onSendMessage={handleSendMessage} resetMessages={resetMessageList} />
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

export default App;
