import logo from '../assets/logo.png'
import {
  connectWallet,
  getCurrentWalletConnected,
} from "../utils/interact.js";
import { useEffect, useState } from "react";

export default function Header(props) {
  const [walletAddress, setWallet] = useState("");
  useEffect(async () => {
    const { address } = await getCurrentWalletConnected();
    setWallet(address);
    addWalletListener();
  }, []);
  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
        } else {
          setWallet("");
        }
      });
      window.ethereum.on("chainChanged", async (chain) => {
        connectWalletPressed()
        if (chain !== 1) {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x1' }], // chainId must be in hexadecimal numbers
          });
        }
      });
    } else {
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setWallet(walletResponse.address);
    props.onConnect(true)
  };

  return(
    <nav className="App-header">
      <img src={logo}></img>
      <div className='App-header-links'>
        <a href="https://primeapeplanet.space/">Home</a>
        <a href='https://twitter.com/PrimeApePlanet'><i className="bi bi-twitter"></i></a>
        <a href='https://instagram.com/primeapeplanet'><i className="bi bi-instagram"></i></a>
        <a href='https://www.instagram.com/primeapeplanet/'><i className="bi bi-discord"></i></a>
      </div>      
      <button type="button" className="btn btn-dark btn-outline-light" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}</button>
    </nav>
  )
}