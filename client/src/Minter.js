import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react';
import { ethers } from 'ethers';

import './Minter.css'
import MyTokenRick from '../src/artifacts/contracts/MyTokenRick.sol/MyTokenRick.json';

function Minter() {
    let mintabi = MyTokenRick.abi;
    let mintAddress = '0x29f600d7250FA9545E79e20cA1c5cB66EaBf33bD';
    //if(typeof window.ethereum) { connectMessage = 'You must be connected to a wallet in order to mint!'}

    const [userWallet, setUserWallet] = useState('');
    const [connectMessage, setConnectMessage] = useState('Connect');

    async function connectUser(e) {
        e.preventDefault();

        if(window.ethereum !== 'undefined') {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setUserWallet(accounts[0])
            setConnectMessage(`${accounts[0]} is connected`)

        }
    }

    async function mintRickToken(e) {
        e.preventDefault();

        if(window.ethereum !== 'undefined') {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const nftrick = new ethers.Contract(mintAddress, mintabi, signer);
            const mintTx = await nftrick.mintRick();
            mintTx.wait();

            // console.log({ provider })
            // console.log({ signer })
            // console.log({ nftrick })
            // console.log({ mintTx })
        }
    }

  return (
    <div>
        <div className='mint-button-container'>
            <button className='mint-button' type='submit' onClick={mintRickToken}>MINT</button>
        </div>
        <div className='connect-button-container'>
            <button className='connect-button' type='submit' onClick={connectUser}>{connectMessage}</button>
        </div>
    </div>);
}
export default Minter;
