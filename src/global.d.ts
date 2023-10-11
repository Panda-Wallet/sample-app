import { PandaProvider } from "./hooks/usePandaWallet";

declare global {
  interface Window {
    panda: PandaProvider;
  }
}
