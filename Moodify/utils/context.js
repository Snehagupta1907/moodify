import React, { createContext, useState, useEffect } from "react";
export const DataContext = createContext();
import { useAccount } from "wagmi";
import { addressPolygon, abi } from "./contract";
import { ethers } from "ethers";

const DataContextProvider = ({ children }) => {
  const { address, isConnecting, isDisconnected } = useAccount();

  // const { ethereum } = window;
  // const getEtheriumContract = () => {
  //   const provider = new ethers.providers.Web3Provider(ethereum);
  //   const signer = provider.getSigner();

  //   const ctx = new ethers.Contract(addressPolygon, abi, signer);
  //   console.log(ctx);
  // };

  useEffect(() => {
    // getEtheriumContract();
  }, []);

  return <DataContext.Provider value={{address}}>{children}</DataContext.Provider>;
};

export default DataContextProvider;
