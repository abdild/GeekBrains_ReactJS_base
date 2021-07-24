// import { Message } from './components/Message/Message';
import './App.css';
import Message from './components/Message/Message';

const myText = "Привет, Ильдар!";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Message text={myText} />
      </header>
    </div>
  );
}

export default App;
