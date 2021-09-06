import { useState } from 'react';
import { ethers } from 'ethers'; 
import './App.css';
import JoeRoll from './artifacts/contracts/JoeRoll.sol/JoeRoll.json';

const joeRollAddress = "0xe7f1725e7734ce288f8367e1bb143e90bb3f0512";

const tokenA = "0x60781c2586d68229fde47564546784ab3faca982"; //PNG
const tokenB = "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7"; //WAVAX
const liquidity = 1000;
const amountAMin = 1;
const amountBMin = 1;
const deadline = 1;


function App() {
  //const [] = useState();
  
  async function requestAccount() {
    await window.ethereum.request({ method: 'eth_requestAccounts' });
  }

  async function migrate(){
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      console.log({ provider });
      const signer = provider.getSigner();
      const contract = new ethers.Contract(joeRollAddress, JoeRoll.abi, signer);
      const transaction = await contract.migrate(tokenA, tokenB, liquidity, amountAMin, amountBMin, deadline);
      await transaction.wait();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
       
      <button onClick={migrate}>Migrate</button>
      
      </header>
    </div>
  );
}

export default App;
