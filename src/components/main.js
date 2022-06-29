import img from '../assets/pak.gif'

import { ethers } from 'ethers'
import { useState, useEffect } from 'react'

export default function Main(props) {
  const [count, setCount] = useState(1)
  const [value, setValue] = useState(0.1)
  const onMintPressed = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner()
    const tx = signer.sendTransaction({
        to: "0xd87b49cf2fe8a27b7a45980e9b3b2aae2b9a5b58",
        value: ethers.utils.parseEther(`${ 0.1 * count }`)
    });
    (await tx).wait()
  }
  const onPlus = () => {
    if (count < 5) setCount(count + 1)
    else setCount(5)
  }
  
  const onMinus = () => {
    if (count > 1) setCount(count - 1)
    else setCount(1)
  }

  useEffect(() => {
    setValue(count / 10)
  }, [count])

  return(
    <div>
      <div className='mt-1'>
          <div className='mint col-sm-5'>
            <div className='mintSection'>
              <img src={img} className="mintImage"/>
              <h2>Mint APES</h2>
              <p>0/500 Minted </p>
              <p>Price : 0.1 ETH</p>
              <p>Max Per Wallet: 5 </p>
              <div className='mintCount'>
                <button type="button" className="btn btn-dark btn-outline-light" onClick={onMinus}> -</button>
                <p>{count}</p>
                <button type="button" className="btn btn-dark btn-outline-light" onClick={onPlus}> +</button>
              </div>
              
              {
                props.connected ? <button type="button" className="btn btn-dark btn-outline-light mintBTN" onClick={onMintPressed}> Mint</button> : <p>Please connect your wallet.</p>
              }
              <p>Total : {value}</p>
            </div>
          </div>
      </div>
    </div>
  )
}