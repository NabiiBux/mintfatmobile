/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { connectWallet, getCurrentWalletConnected } from "./interact";
import Modal from "react-bootstrap/Modal";
import  './Minting-section.css';
import Form from "react-bootstrap/Form";

const alchemyKey = process.env.REACT_APP_ALCHEMY_KEY;
const contractABI = require("./abi.json");
const contractAddress = "0x22e30ce48e1e2dff1d2711999bc35bb69ac8eb13";
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKey);
const contract = new web3.eth.Contract(contractABI, contractAddress);

async function show_error_alert(error){
  let temp_error = error.message.toString();
  console.log(temp_error);
  let error_list = [
    "FREE_MINT_HAVE_NOT_STARTED_YET",
    "NOT_ENOUGH_SUPPLY_TO_MINT_DESIRED_AMOUNT",
    "FREE_LIMIT_REACHED",
    "YOU_HAVE_ALREADY_CLAIMED",
    "SALE_HAS_NOT_STARTED_YET",
    "INVALID_QUANTITY",
    "CANNOT_MINT_THAT_MANY",
    "Sent Amount Not Enough",
    "Max 20 Allowed.",
    "insufficient funds",
    "INVALID_ETH"
    
  ]

  for(let i=0;i<error_list.length;i++){
    if(temp_error.includes(error_list[i])){
     // set ("Transcation Failed")
      alert(error_list[i]);
    }
  }
}


const mint = async (amount, price) => {
  const { address } = await getCurrentWalletConnected();
  if (address === "") {
    return {
      success: false,
      status: "❗Please make sure wallet connected.",
    };
  } else {
    try{

    console.log("price: "+amount * price);
    const estemated_Gas = await contract.methods.mint(amount).estimateGas({
      from : address, 
      value: amount * price,
      maxPriorityFeePerGas: null,
      maxFeePerGas: null
    });
    console.log(estemated_Gas)
    console.log("Gas: "+estemated_Gas)
    const result = await contract.methods.mint(amount).send({
      from : address,
      value: amount * price,
      gas: estemated_Gas,
      maxPriorityFeePerGas: null,
      maxFeePerGas: null
    })
      .on("confirmation", function () {
        alert("Success")
      })
      .on("error", async function (error, receipt) {
        console.log(error);
      });
    } catch(e){
      show_error_alert(e);
    }
    return {
      status: "",
    };
  }
};
const mintPresale = async () => {
  const { address } = await getCurrentWalletConnected();
  if (address === "") {
    return {
      success: false,
      status: "❗Please make sure wallet connected.",
    };
  } else {
    try{

    
    const estemated_Gas = await contract.methods.mint_Presale().estimateGas({
      from : address, 
      maxPriorityFeePerGas: null,
      maxFeePerGas: null
    });
    console.log(estemated_Gas)
    console.log("Gas: "+estemated_Gas)
    const result = await contract.methods.mint_Presale().send({
      from : address,
      gas: estemated_Gas,
      maxPriorityFeePerGas: null,
      maxFeePerGas: null
    })
      .on("confirmation", function () {
        alert("Success")
      })
      .on("error", async function (error, receipt) {
        console.log(error);
      });
    } catch(e){
      show_error_alert(e);
    }
    return {
      status: "",
    };
  }
};

const Mint = () => {
  const [walletAddress, setWallet] = useState("");
  const [show, setShow] = useState(false);
  const [tokenNumber, setTokenNumber] = useState(1);
  const [status, setStatus] = useState("");
  const publicsale = true;
  const [supply, setSupply] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleClose = () => setShow(false);
  const PRICE = 150000000000000000;

  const handleShow = async () => {
    setShow(true);
  };

  const onMintHandle = () => {
    setStatus("Mint not allowed!");
  };

  const decreaseTokenNumber = () => {
    if (tokenNumber === 1) {
      return;
    }
    setTokenNumber(tokenNumber - 1);
  };

  const onMintPressed = async () => {
    const { status } = await mint(tokenNumber, PRICE);
    setStatus(status);
  };

  useEffect(() => {
    async function fetchData() {
      const { address } = await getCurrentWalletConnected();
      contract.methods
        .totalSupply()
        .call()
        .then((_supply) => {
          setSupply(_supply);
        })
        .catch((err) => console.log(err));
      setWallet(address);
      addWalletListener();
    }
    fetchData();
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
    } else {
    }
  }

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setWallet(walletResponse.address);
  };

  const handleIncrement = () => {
    if (quantity < 5) {
      setQuantity((prev) => prev + 1);
    }
  };
  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity((prev) => prev - 1);
    }
  };


  return (
    <>

<div id="Buynft" className="Buynft">

<div className="container -fluid p-5 ">
  <div className="row mx-auto text-center">
    <div className="col-md-4 mx-auto my-auto text-center">
      {/* <img className="image" src={gif} alt="Pic" /> */}
    </div>
    <div className="col-md-2">

    </div>
    <div className="col-md-6"

    >
      <div className="col-md-12 btngroup ">
        <h1 className="mintheading text-center"> </h1>
        <div className="row borderbtm">
          <div className="col-md-12 mintcol">
            <h4 style={{ color: "white" }}> </h4>
            <h4 style={{ color: "white" }} className="float-center ">{ }  </h4>
          </div>
        </div>
        <div className="row borderbtm">
          <div className="col-md-12 mint-col">
            <h4 style={{ color: "white" }} className="pt-2">   </h4>
            <div
              className="d-flex rounded btngroup "
              // role="group"
              // aria-label="First group"
            >
              <button
                className="btn increment-btn m-0 p-0"
                // onClick={() => {
                //   if (window > 1) {
                //     mint(window - 1);
                //   }
                // }}
              >
                
              </button>
              <button type="button" className="btn text-white btn-size">
                { }
              </button>
              <button
                className="btn increment-btn m-0 p-0"
                // onClick={() => {
                //   if (window < 2) {
                //     (window + 1);
                //   }
                // }}
              >
                
              </button>
            </div>
          </div>
        </div>
        <div className="row borderbtm">
          <div className="col-md-12 mint-col">
            <h4 style={{ color: "white" }}> </h4>
            <h4 style={{ color: "white" }} className="float-center"> </h4>
          </div>
        </div>
        <div className="row borderbtm">
          <div className="col-md-12 mint-col">
            <h4 style={{ color: "white" }}> </h4>
            <h4 style={{ color: "white" }} className="float-center">{ }</h4>
          </div>
        </div>
        <p className="text-center py-5 what_inner_text ">
          {/* <button href="#Buynft"
            className="btn mint-btn"
            onClick={async () => {
              await connectWallet();
              await mint();
            }}
          // disabled
          >
            Mint Now
          </button> */}
          {/* <button class=" float-center"
          // onClick={async () => {
          //   await connectWallet();
          //   await mint();
          // }}
          >
           
          </button> */}
          
        </p>
      </div>
    </div>
  </div>
</div>

</div>
<div className="mint-container">
        <div>
          <div className="mint-panel">
            <div className="mint-price">
              Up To 5 Per Wallet
              <br />
              {/* Only 250 Each */}
             Up To 5 Per Wallet at 0.15ETH.
              <br />
              Plus Gas
            </div>
            <div className="text-center" style={{ width: "100%" }}>
              <Button
                className="connect-btn mt-3"
                onClick={connectWalletPressed}
                style={{
                  borderRadius: "10px",
                  fontSize: "24px",
                  width: "100%",
                }}
              >
                {walletAddress.length > 0 ? (
                  "" +
                  String(walletAddress).substring(0, 6) +
                  "..." +
                  String(walletAddress).substring(38)
                ) : (
                  <span>Connect</span>
                )}
              </Button>
            </div>
            <div className="mint-status text-center">{supply} / 10000</div>
            <div className="df jcc">
              <Button
                className="mint-btn"
                onClick={handleShow}
                style={{
                  borderRadius: "10px",
                  fontSize: "24px",
                  width: "100%",
                }}
              >
                MINT NOW
              </Button>
            </div>
            {/* <div className="custom-minting">
              <button onClick={() => handleDecrement()}>-</button>
              <span>{quantity}</span>
              <button onClick={() => handleIncrement()}>+</button>
            </div> */}
            <div className="df jcc mt10 mb10">
              <Button
                className="mint-btn"
                onClick={mintPresale}
                style={{
                  borderRadius: "10px",
                  fontSize: "24px",
                  width: "100%",
                }}
              >
                MINT  PRESALE
              </Button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              {/* <a href="https://twitter.com/aperians" target="_blank">
                <div className="text-base flex justify-center items-center rounded-full cursor-pointer w-10 h-10 bg-white text-black social-icon">
                  <AiOutlineTwitter />
                </div>
              </a> */}
            </div>
          </div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>MINT FATE NFT</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img
                src="./images/frame.jpeg"
                alt=""
                style={{ maxWidth: "220px" }}
              />
              <div className="mint-number">
                <button type="button" onClick={decreaseTokenNumber}>
                  <span aria-hidden="true">-</span>
                </button>
                <Form>
                  <Form.Label>{tokenNumber}</Form.Label>
                  {status ? <div>{status}</div> : <div></div>}
                </Form>
                {tokenNumber < 5 ? (
                  <button
                    type="button"
                    onClick={() => setTokenNumber(tokenNumber + 1)}
                  >
                    <span aria-hidden="true">+</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setTokenNumber(tokenNumber)}
                  >
                    <span aria-hidden="true">+</span>
                  </button>
                )}
              </div>
            </Modal.Body>
            <Modal.Footer>
              {!publicsale ? (
                <Button onClick={onMintHandle}>Mint</Button>
              ) : (
                <Button onClick={onMintPressed}>Mint</Button>
              )}
              <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>
       
        </div>
      </div>
    </>
  );
};

export default Mint;
