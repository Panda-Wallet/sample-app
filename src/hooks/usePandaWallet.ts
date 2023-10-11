import { useContext } from "react";
import { PandaContext } from "../contexts/PandaWalletContext";

export const usePandaWallet = () => {
  const context = useContext(PandaContext);
  if (!context) {
    throw new Error("usePandaWallet must be used within a PandaProvider");
  }
  return context;
};
