import { useState } from "react";
import pandaIcon from "../assets/panda-icon.svg";
import { PandaConnectButton } from "../components/PandaConnectButton";
import {
  Addresses,
  SignedMessage,
  usePandaWallet,
} from "panda-wallet-provider";

export const SamplePage = () => {
  const wallet = usePandaWallet();
  const [pubKey, setPubKey] = useState<string | undefined>();
  const [addresses, setAddresses] = useState<Addresses | undefined>();
  const [messageToSign, setMessageToSign] = useState<string>("");

  const [signedMessage, setSignedMessage] = useState<
    SignedMessage | undefined
  >();

  const handleConnect = async () => {
    if (!wallet.connect) {
      window.open(
        "https://github.com/Panda-Wallet/panda-wallet#getting-started-alpha",
        "_blank"
      );
      return;
    }
    const key = await wallet.connect();
    if (key) setPubKey(key);
  };

  const handleGetAddresses = async () => {
    const addrs = await wallet.getAddresses();
    if (addrs) setAddresses(addrs);
  };

  const handleSignMessage = async () => {
    if (!messageToSign) {
      alert("There was no message to sign!");
      return;
    }
    const signRes = await wallet.signMessage({ message: messageToSign });
    if (signRes) setSignedMessage(signRes);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={pandaIcon}
          alt="Panda Wallet Icon"
          style={{ width: "5rem", height: "5rem" }}
        />
        <h1>Panda Wallet Demo</h1>
        <h4>First lets connect your wallet 🤑</h4>
        <PandaConnectButton onClick={handleConnect} />
        <p style={{ width: "80%", fontSize: "0.75rem", margin: "1rem" }}>
          {JSON.stringify(pubKey)}
        </p>
        {pubKey && (
          <>
            <h4>Now lets get the addresses 💪</h4>
            <button onClick={handleGetAddresses} style={{ margin: "1rem" }}>
              Get Addresses
            </button>
            <p style={{ width: "80%", fontSize: "0.75rem", margin: "1rem" }}>
              {JSON.stringify(addresses)}
            </p>
          </>
        )}
        {addresses && (
          <>
            <h4>Finally, lets sign a message ✍️</h4>
            <input
              placeholder="Message to sign..."
              value={messageToSign}
              onChange={(e) => setMessageToSign(e.target.value)}
            />
            <button onClick={handleSignMessage} style={{ margin: "1rem" }}>
              Sign Message
            </button>
            <p style={{ width: "80%", fontSize: "0.75rem", margin: "1rem" }}>
              {JSON.stringify(signedMessage)}
            </p>
          </>
        )}
      </header>
    </div>
  );
};
