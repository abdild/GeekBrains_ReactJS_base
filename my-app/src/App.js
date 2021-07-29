import './App.css';
import { Message } from './components/Message';
import { useCallback, useState, useRef, useEffect } from 'react';
import { MessageField } from './components/MessageField';
import { Form } from './components/Form';
import { AUTHORS } from './constants';


function App() {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = useCallback((newMessage) => {
    setMessages([...messages, newMessage])
  }, [messages]);

  useEffect(() => {
    if (
      !messages.length ||
      messages[messages.length - 1].author === AUTHORS.robot
    ) {
      return;
    }

    const timeout = setTimeout(() => {
      const newMessage = {
        text: "I am a robot",
        author: AUTHORS.robot,
        id: Date.now(),
      };

      setMessages([...messages, newMessage]);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [messages]);
  


  return (
    <>
      <h1>Black Messenger</h1>
      <div className="MainWindow">
        <div className="ChatWindow ScrollBarStyle">
          <MessageField messages={messages} />
        </div>
        <Form onSendMessage={handleSendMessage} />
      </div>
    </>
  );
}

export default App;
