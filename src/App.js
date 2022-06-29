import './App.css';
import Header from './components/Header';
import Main from './components/main';
import mainBG from './assets/wallpaper1.png'
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { Provider } from 'react-redux';
import store from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App" className='mainBG' style={{ backgroundImage: `url(${mainBG})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: "center"}}>
        <Header />
        <ReactNotifications />
        <Main />
      </div>
    </Provider>
  );
}

export default App;
