import './App.css';
import {useState} from "react";
import {ethers} from "ethers";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {ConnectionPage} from "./pages/connectionPage";
import {WalletProvider,walletContext} from "./utils/walletProvider";

function App() {

  return (
    <div>
      <Router>
        <WalletProvider>
        <Routes>
          <Route exact path="/" element={<ConnectionPage/>}/>
        </Routes>
        </WalletProvider>
      </Router>
    </div>
  )

  
}

export default App;
