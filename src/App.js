import './App.css';
import Header from './components/Header';
import Main from './components/main';
import mainBG from './assets/wallpaper1.png'
import { useState } from 'react';

function App() {
  const [connected, setConnected] = useState(false)
  return (
    <div className="App" className='mainBG' style={{ backgroundImage: `url(${mainBG})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: "center"}}>
      <Header onConnect = {setConnected}></Header>
      <Main connected = {connected}></Main>
    </div>
  );
}

export default App;
