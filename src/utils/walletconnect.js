import { ethers } from "ethers";
import Web3Modal from "web3modal";

export default walletconnect = async() => {
  const providerOptions = { };
  
  const web3Modal = new Web3Modal({
    network: "mainnet", // optional
    cacheProvider: true, // optional
    providerOptions // required
  });
  
  const instance = await web3Modal.connect();
  
  const provider = new ethers.providers.Web3Provider(instance);
  if(parseInt(provider.chainId, 16) !== 1) {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x1' }],
    })
  }
  const signer = provider.getSigner();
  provider.on("accountsChanged", (accounts) => {
    dispatch(updateAccount(accounts[0]));
  });
  
  // Subscribe to chainId change
  provider.on("chainChanged", (chainId) => {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: '0x1' }],
    })
  });
  return {
    address: await signer.getAddress(),
    provider: provider,
  }
}