import './App.css';
import { Provider } from 'react-redux'; // store를 App.js전체에 사용하기 위해 필요
import store from './Redux/store'; // 실제 Redux의 store

// components part
import ToyPart from './components/ToyPart';

function App() {
  return (
      <Provider store = {store}>
        <div className = "App">
          <ToyPart />
        </div>
      </Provider>

  );
}

export default App;
