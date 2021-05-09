import { Provider } from 'react-redux'; // store를 App.js전체에 사용하기 위해 필요
import store from './Redux/store'; // 실제 Redux의 store

// components part
import ToyPart from './components/ToyPart';
import CookiePart from './components/CookiePart';
import ResumePart from './components/ResumePart';

function App() {
  return (
      <Provider store = {store}>
        <div className = "App">
          <ToyPart />
          <CookiePart />
          <ResumePart />
        </div>
      </Provider>

  );
}

export default App;
