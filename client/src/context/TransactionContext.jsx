import React, {useState, useEffect} from 'react';
import { ethers } from 'ethers'

import { contractAbi, contractAddress} from '../utils/constants'
import { createContext } from 'react';

export const TransactionContext = createContext();

const { ethereum } = window;

const createEthereumContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();
  const transactionContract = new ethers.Contract(contractAbi, contractAddress,signer);

  return transactionContract;
}

export const TransactionProvider = ({children}) => {

  const [connectedAccount, setConnectedAccount] = useState("");
  const [currentAccount, setCurrentAccount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [transactionCount, setTransactionCount] = useState(localStorage.getItem("transactionCount"));
  const [transactions,setTransactions] = useState([]);
  const [formData, setFormData] =useState({ addressTo: '', amount: '', keyword: '', message: ''});

  const handleChange = (e, name) => {
    setFormData((prevState) => ({ ...prevState, [name]: e.target.value}));
  };

  const getAllTransactions = async () => {
    try {
      if (ethereum) {
        const transactionContract = createEthereumContract();

        const availableTranactions = await transactionContract.getAllTransactions();

        const structuredTransactions = availableTranactions.map((transactions) => ({
          addressTo: transactions.receiver,
          addressFrom: transactions.sender,
          timestamp: new Date(transactions.timestamp.toNumber() * 1000).toLocaleString(),
          message: transactions.message,
          keyword: transactions.keyword,
          amount: parseInt(transactions.amount_hex) / (10 ** 18)
        }));

        console.log(structuredTransactions);

        setTransactions(structuredTransactions);
      
    } else {
      console.log(
        "Ethereum is not present"
      )
    }
  } catch (error) {
    console.log(error);
  }
}

  const checkIfWalletIsConnected = async () => {
    try {
      if(!ethereum) return alert("Please install metamask");
    
      const accounts = await ethereum.request({ method: 'eth_accounts'});

      if (accounts.length) {
        setCurrentAccount(accounts[0]);

        getAllTransactions();
      } else {
        console.log("No accounts found");
      }
    } catch (error){
      console.log(error);
    }
  }
  const checkIfTransactionExists = async () => {
    try {
      if (ethereum) {
        const transactionContract = createEthereumContract();
        const currentTransactionCount = await transactionContract.getTransactionCount();

        window.localStorage.setItem("transactionCount", currentTransactionCount);
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  const connectWallet = async () => {
    try {
      if(!ethereum) return alert ("Please install metamask")
      const accounts = await ethereum.request({method: 'eth_requestAccounts'});

      setCurrentAccount(accounts[0]);
      window.location.reload();
    } catch (error) {
      console.log(error);
 
      throw new Error("No ethereum object");
    }
  };

  const sendTransaction = async () => {
    try{
      if (ethereum) {
        const {addressTo, amount, keyword, message } = formData;
        const transactionContract = createEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);

        await ethereum.request({
          method: "eth_sendTransaction",
          params: [{
            from: currentAccount,
            to: addressTo,
            gas:'0x5208',
            value: parsedAmount._hex,
          }],
        });

        const transactionHash = await transactionContract.addToBlockchain(addressTo,parsedAmount, message, keyword);

        setIsLoading(true);
        console.log(`Loading - ${transactionHash.hash}`);
        await transactionHash.wait();
        setIsLoading(false);
        console.log(`Success - ${transactionHash.hash}`);
        

        const transactionCount = await transactionContract.getTransactionCount();
        
        setTransactionCount(transactionContract.toNumber());
        window.location.reload();
      } else {
        console.log("No ethereum object");
      }
     } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
     }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
    checkIfTransactionExists();
  }, [])


  return (
    <TransactionContext.Provider value={{ transactionCount, connectWallet, transactions, currentAccount, isLoading, sendTransaction, connectedAccount, handleChange, formData}}>
      {children}
    </TransactionContext.Provider>
  );
}