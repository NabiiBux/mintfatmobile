import logo from '../assets/logo.png'
import { useDispatch, useSelector } from "react-redux";
import { connect } from '../store/walletActions'
export default function Header() {
  const dispatch = useDispatch();
  const wallet = useSelector((state) => state.wallet);

  const connectWalletPressed = () => {
    dispatch(connect())
  };

  return(
    <nav className="App-header">
      <img className='logo-image' src={logo}></img>
      <div className='App-header-links'>
        <a href='https://twitter.com/boredogeclub'><i className="bi bi-twitter"></i></a>
        <a href='https://www.instagram.com/boreddogeclub'><i className="bi bi-instagram"></i></a>
        <a href='https://discord.com/invite/boreddogeclub/'><i className="bi bi-discord"></i></a>
      </div>      
      <button type="button" className="btn btn-dark btn-outline-light" onClick={connectWalletPressed}>
        {wallet.account !== null ? ( String(wallet.account).substring(0, 6) + "..." + String(wallet.account).substring(38) ) : 
        (
          <span>Connect Wallet</span>
        )}</button>
    </nav>
  )
}