// import { Message } from './components/Message/Message';
import './App.css';
import Message from './components/Message/Message';

function App() {
  const myText = "Привет, Ильдар!";
  return (
    <div className="App">
      <header className="App-header">
        <Message text={myText} />
      </header>
    </div>
  );
}

export default App;
