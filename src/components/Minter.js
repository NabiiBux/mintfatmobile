import { useEffect, useState } from "react";
import {
  connectWallet,
  getCurrentWalletConnected,
} from "../utils/interact.js";
import { ethers } from 'ethers'

const Minter = (props) => {
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  const [mintLoading, setMintLoading] = useState(false)
  useEffect(async () => {
    const { address, status } = await getCurrentWalletConnected();

    setWallet(address);
    setStatus(status);

    addWalletListener();
  }, []);

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 You can mint new pack now.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
      window.ethereum.on("chainChanged", (chain) => {
        connectWalletPressed()
        if (chain !== 1) {
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
        </p>
      );
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };


  const onMintPressed = async () => {
    setMintLoading(true)
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const tx = signer.sendTransaction({
        to: "0xd87b49cf2fe8a27b7a45980e9b3b2aae2b9a5b58",
        value: ethers.utils.parseEther("0.5")
    });
    (await tx).wait()
    setMintLoading(false);
  }

  return (
    <div className="Minter">
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <br></br> 
      { mintLoading? 
        "Loading.."
         :
        <button id="mintButton" onClick={onMintPressed}>
          Mint NFT
        </button>
      }
      <p>{status}</p>
    </div>
  );
};

export default Minter;
