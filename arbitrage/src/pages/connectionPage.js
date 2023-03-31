import React, { useState } from "react";
import { useContext } from "react";
import WalletContext from "../utils/walletProvider";
import { Contract, ethers } from "ethers";
import "../App.css";

export const ConnectionPage = () => {
  let { connectWallet, walletAcc, provider, signer, getContract, contracts } =
    useContext(WalletContext);

  let [balance, setBalance] = useState(null);

  const tokenA = "0x82C24eF167484b29195B0ce92b34Ae3d52B4C331";
  const tokenB = "0xa0d9faadae312e37e695cc826b0e3cbbdb197077";

  const dex1Address = "0xA027c0980BdA7E05c85A3e35908F46245f3D4cC1";
  const dex1ABI = [{"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_amount0","type":"uint256"},{"internalType":"uint256","name":"_amount1","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserve0","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reserve1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenIn","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"}],"name":"swap","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

  const dex2Address = "0xC646bba52d05d6Db4965A9972BF2df1e8ed7ddA0";
  const dex2ABI = [{"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_amount0","type":"uint256"},{"internalType":"uint256","name":"_amount1","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserve0","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reserve1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenIn","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"}],"name":"swap","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

  const dex3Address = "0x846cB82cF6E3e2C06210058349Af9C9F3a24b23d";
  const dex3ABI = [{"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_amount0","type":"uint256"},{"internalType":"uint256","name":"_amount1","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserve0","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reserve1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenIn","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"}],"name":"swap","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];
  
  const dex4Address = "0xd79e01aF3F6554212349B875c32dF18e76093008";
  const dex4ABI = [{"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"_amount0","type":"uint256"},{"internalType":"uint256","name":"_amount1","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"shares","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_shares","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reserve0","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"reserve1","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenIn","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"}],"name":"swap","outputs":[{"internalType":"uint256","name":"amountOut","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}];

  let graph = {
    "A": {
      "atob": 0,
      "btoa": 0,
      "contractNo": 0
    },
    "B": {
      "atob": 0,
      "btoa": 0,
      "contractNo": 1
    },
    "C": {
      "atob": 0,
      "btoa": 0,
      "contractNo": 2
    },
    "D": {
      "atob": 0,
      "btoa": 0,
      "contractNo": 3
    }
  };


  const getBalance = async () => {
    let balancee = await provider.getBalance(walletAcc);
    let balanceEth = ethers.utils.formatEther(balancee);
    setBalance(balanceEth);
    console.log(contracts);
  };

  const sendRawData = async (contractAddress,rawData) => {
    const tx = await signer.sendTransaction({
      data: rawData,
      to: contractAddress,
    });
    await tx.wait();
    console.log("Transaction hash:", tx.hash);
    console.log(tx);
  }

  const getToken = async (contractAddress) => {
    const rawData = "0xaa6ca808";
    await sendRawData(contractAddress,rawData);
  }

  const connectContracts = async () => {
    await getContract(dex1Address,dex1ABI);
    await getContract(dex2Address,dex2ABI);
    await getContract(dex3Address,dex3ABI);
    await getContract(dex4Address,dex4ABI);
    console.log(contracts);
  };

  const getAmountOut = async (contract,tokenType,amountIn) => {
    if (tokenType == tokenA){
      let res = await contract.reserve0();
      let res0 = parseInt(res["_hex"]);
      let response = await contract.reserve1();
      let res1 = parseInt(response["_hex"]);
      let result =
        (res1 * amountIn * 997) / 1000 / (res0 + (amountIn * 997) / 1000);
      return result;
    }
    else{
      let res = await contract.reserve1();
      let res0 = parseInt(res["_hex"]);
      let response = await contract.reserve0();
      let res1 = parseInt(response["_hex"]);
      let result =
        (res1 * amountIn * 997) / 1000 / (res0 + (amountIn * 997) / 1000);
      return result;
    }
  };

  const updateGraph = async () => {
    graph["A"]["atob"] = await getAmountOut(contracts[0],tokenA,100);
    graph["A"]["btoa"] = await getAmountOut(contracts[0],tokenB,100);
    graph["B"]["atob"] = await getAmountOut(contracts[1],tokenA,100);
    graph["B"]["btoa"] = await getAmountOut(contracts[1],tokenB,100);
    graph["C"]["atob"] = await getAmountOut(contracts[2],tokenA,100);
    graph["C"]["btoa"] = await getAmountOut(contracts[2],tokenB,100);
    graph["D"]["atob"] = await getAmountOut(contracts[3],tokenA,100);
    graph["D"]["btoa"] = await getAmountOut(contracts[3],tokenB,100);
    await console.log(graph);
  }

  const arbitrageBot = async () => {

    await updateGraph();
    
    console.log("test");
    for (let i in graph){
      console.log(graph[i]["contractNo"]);
      await console.log(graph[i]["atob"], graph[i]["btoa"]);
      for (let j in graph){
        let result = await getAmountOut(contracts[graph[j]["contractNo"]],tokenB,parseInt(Math.floor(graph[i]["atob"])));
        console.log(result);
        // console.log("test",parseInt(Math.floor(tokenB,graph[i]["atob"])));
        if (result > 100){
          console.log("arbitrage found");
          await contracts[graph[i]["contractNo"]].swap(tokenA,100);
          await contracts[graph[j]["contractNo"]].swap(tokenB,parseInt(Math.floor(graph[i]["atob"])));
          await updateGraph();
        }
      }
    }

  }

  const approvalForToken = async(tokenAddress,spenderAddress) => {
    const amountToAllow = ethers.utils.parseUnits('100', 18); // Allow 100 tokens
    const iface = new ethers.utils.Interface(['function approve(address spender, uint256 amount) public returns (bool)']);
    const data = iface.encodeFunctionData('approve', [spenderAddress, amountToAllow]);
    const tx = {
      to: tokenAddress,
      data: data
    };
    const result = await signer.sendTransaction(tx);
    console.log(result);
  }

  const testSwap = async () => {
    let res = await contracts[0].swap(tokenA,100);
    await console.log(res);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => connectWallet()}>Connect Wallet</button>
        <h5>Wallet Address: {walletAcc}</h5>
        <button onClick={() => getBalance()}>Get Balance</button>
        <h5>Balance: {balance} ETH</h5>
        <button
          onClick={() => getToken(tokenA)}
        >
          getToken - A
        </button>
        <button
          onClick={() => getToken(tokenB)}
        >
          getToken - B
        </button>

        <button onClick={()=>connectContracts()}>Connect Contracts</button>
        {/* <button
          onClick={() => testSwap()}
        >
          test swap
        </button> */}
        
        
        <h2>Contracts: </h2>
        {contracts.map((contract) => {
          
          console.log(contract);
          return (
            <div>
              <p>{contract.address}</p>
              <button onClick={() => approvalForToken(tokenA,contract.address)}>APPROVE FOR TOKENA</button>
              <button onClick={() => approvalForToken(tokenB,contract.address)}>APPROVE FOR TOKENB</button>
            </div>
          );
        })}

        <button onClick={()=>arbitrageBot()}>ARBITRAGE</button>
      </header>
    </div>
  );
};

export default ConnectionPage;
