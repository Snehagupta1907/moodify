import React, { createContext, useState, useEffect, useCallback } from "react";
import { toast } from "react-toastify";
import { useAccount } from "wagmi";
import { addressPolygon, abi } from "./contract";
import { ethers } from "ethers";
export const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const { address, isConnecting, isDisconnected } = useAccount();

  const notify = () => toast("Wow so easy!");
  const getEtheriumContract = async () => {
    const { ethereum } = window;
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const smartContract = new ethers.Contract(addressPolygon, abi, signer);
    return smartContract;
  };

  const mintingMusic = async (uri,name,artist,year,image) => {
    try {
  
      let ctx = await getEtheriumContract();

     
      let trx = await ctx.musicMint(uri,name,artist,year,image,{from:address});
      notify();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    (async () => {
       let ctx = await getEtheriumContract();
       console.log("ctx",ctx);
    })();
  }, []);

  return (
    <DataContext.Provider value={{ address , mintingMusic }}>{children}</DataContext.Provider>
  );
};

export default DataContextProvider;
