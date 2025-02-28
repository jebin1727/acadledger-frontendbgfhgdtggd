// src/ConnectWallet.js
import React, { useState } from "react";
import {
  WalletConnectModalSign,
  useConnect,
  useRequest,
} from "@walletconnect/modal-sign-react";

function ConnectWallet() {
  const [account, setAccount] = useState(null);
  let wcProvider;
  const projectId = "05e473e2bb005b99fac3987ed2e9b0ca";
  const chains = [1];

  const [session, setSession] = useState({});
  const { request, data, error, loading } = useRequest();
  const [disabled, setDisabled] = useState(false);
  const { connect } = useConnect({
    requiredNamespaces: {
      eip155: {
        methods: ["eth_sendTransaction", "personal_sign"],
        chains: ["eip155:1"],
        events: ["chainChanged", "accountsChanged"],
      },
    },
  });

  async function onConnect() {
    try {
      setDisabled(true);
      const session = await connect();
      const address = session.namespaces.eip155.accounts[0].split(':')[2];
      setAccount(address);
      console.info(session);
      console.log(session)
      setSession(session);
    } catch (err) {
      console.error(err);
    } finally {
      setDisabled(false);
    }
  }

  return (
    <div className="">
      <button className="connect-wallet-btn-custom" onClick={onConnect} disabled={disabled}>
        Connect Wallet
      </button>
      <WalletConnectModalSign
        projectId={projectId}
        metadata={{
          name: "My Dapp",
          description: "My Dapp description",
          url: "https://my-dapp.com",
          icons: ["https://my-dapp.com/logo.png"],
        }}
      />
      {session && <p>Wallet Address: {account}</p>}
    </div>
  );
}

export default ConnectWallet;
