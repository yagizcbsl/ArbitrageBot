import { createContext, useState, useEffect } from "react";
import { ethers } from "ethers";

const WalletContext = createContext();

export default WalletContext;

export const WalletProvider = ({ children }) => {

    let [walletAcc, setWalletAcc] = useState(null);
    let [provider, setProvider] = useState(null);
    let [signer,setSigner] = useState(null);
    let [contracts,setContracts] = useState([]);

    const requestAccount = async () => {
        if (window.ethereum) {
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts"
                });
                setWalletAcc(accounts[0]);
            }
            catch (error) {
                alert("Could not connect to the Metamask account");
            }
        }
        else {
            alert("Metamask is not detected");
        }
    }

    const connectWallet = async () => {
        if (typeof window.ethereum !== "undefined") {
            await requestAccount();
            const providerr = new ethers.providers.Web3Provider(window.ethereum);
            const signerr = providerr.getSigner();
            setProvider(providerr);
            setSigner(signerr);
        }
        else {
            alert("Metamask is not detected");
        }
    }

    const getContract = async (address,abi) => {
        console.log(address);
        console.log(abi);
        let contract = new ethers.Contract(address, abi, signer);
        let prevs = contracts;
        prevs.push(contract);
        setContracts(prevs);
    }

    let contextData = {
        connectWallet: connectWallet,
        walletAcc: walletAcc,
        signer: signer,
        provider: provider,
        contracts: contracts,
        getContract: getContract
    }
    
    return (
        <WalletContext.Provider value={contextData}>
            {children}
        </WalletContext.Provider>
    )
}