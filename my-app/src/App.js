import './App.css';
import { Router } from './components/Router';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
