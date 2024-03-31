"use client";
import React, { useState } from 'react';
import { useWalletStore } from "@/lib/stores/wallet";
import { Button } from "@/components/ui/button";

interface SignedData {
  publicKey: string;
  data: string;
  signature: {
    field: string;
    scalar: string;
  };
}

interface ProviderError extends Error {
  message: string;
  code: number;
  data?: unknown;
}

interface SendTransactionArgs  {
  // transaction is zk commond that create by contract.
  readonly transaction: string | object;
  // option. 
  readonly feePayer?: {
      // option. Auro Wallet also provide advance option to change fee.
      readonly fee?: number;
      // option.
      readonly memo?: string;
  };
}

export default function Home() {
  const wallet = useWalletStore();
  const [result, setResult] = useState<string | null>(null);

  async function signMessage(num: number) {
    const content = `Do you wish to continue?`;
    if (wallet.wallet == "B62qnhh24AJeT7dxt7f3SP231syF1JReswXxPD1EhCZR3Ew7UHfUWGt") {

    }

    // const transactionJSON = { "feePayer": { "body": { "publicKey": "B62qiTKpEPjGTSHZrtM8uXiKgn8So916pLmNJKDhKeyBQL9TDb3nvBG", "fee": "0", "validUntil": null, "nonce": "0" }, "authorization": "7mWxjLYgbJUkZNcGouvhVj5tJ8yu9hoexb9ntvPK8t5LHqzmrL6QJjjKtf5SgmxB4QWkDw7qoMMbbNGtHVpsbJHPyTy2EzRQ" }, "accountUpdates": [{ "body": { "publicKey": "B62qnwTPcbNqvrpw3pxdsD3NLnbadNJFk5MZnxQLUaX52EiGX7x9TM8", "tokenId": "wSHV2S4qX9jFsLjQo8r1BsMLH2ZRKsZx6EJd1sbozGPieEC4Jf", "update": { "appState": ["33", null, null, null, null, null, null, null], "delegate": null, "verificationKey": null, "permissions": null, "zkappUri": null, "tokenSymbol": null, "timing": null, "votingFor": null }, "balanceChange": { "magnitude": "0", "sgn": "Positive" }, "incrementNonce": false, "events": [], "actions": [], "callData": "9480311477670922688987895225723267062012786366393322319448750791657739847081", "callDepth": 0, "preconditions": { "network": { "snarkedLedgerHash": null, "blockchainLength": null, "minWindowDensity": null, "totalCurrency": null, "globalSlotSinceGenesis": null, "stakingEpochData": { "ledger": { "hash": null, "totalCurrency": null }, "seed": null, "startCheckpoint": null, "lockCheckpoint": null, "epochLength": null }, "nextEpochData": { "ledger": { "hash": null, "totalCurrency": null }, "seed": null, "startCheckpoint": null, "lockCheckpoint": null, "epochLength": null } }, "account": { "balance": null, "nonce": null, "receiptChainHash": null, "delegate": null, "state": ["31", null, null, null, null, null, null, null], "actionState": null, "provedState": null, "isNew": null }, "validWhile": null }, "useFullCommitment": false, "implicitAccountCreationFee": false, "mayUseToken": { "parentsOwnToken": false, "inheritFromParent": false }, "authorizationKind": { "isSigned": false, "isProved": true, "verificationKeyHash": "10245640308479032248697049003357984740828440340040477697922362566190589502399" } }, "authorization": { "proof": null, "signature": null } }], "memo": "E4YM2vTHhWEg66xpj52JErHUBU4pZ1yageL4TVDDpTTSsv8mK6YaH" };
    // const fee = "1"
    // const memo = "1"

    // const sendResult: SendTransactionArgs | ProviderError = await (window as any).mina?.sendTransaction({
    //   transaction: transactionJSON,
    //   feePayer: {
    //     fee: fee,
    //     memo: memo,
    //   },
    // });

    const signResult: SignedData | ProviderError = await (window as any)?.mina
      ?.signMessage({
        message: content,
      })
      .catch((err: any) => err);

    console.log(num);
    console.log(signResult);
    setResult(num + JSON.stringify(signResult));
  }

  return (
    <div className="mx-auto -mt-32 h-full pt-16">
      <div className="flex h-full w-full items-center justify-evenly pt-16">
        {wallet.wallet ?
          <>
            <div className="mt-6">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <Button onClick={() => signMessage(1)}>치과보험</Button>
                  </dd>
                </div>
              </dl>
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <Button onClick={() => signMessage(2)}>암보험</Button>
                  </dd>
                </div>
              </dl>
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <Button onClick={() => signMessage(3)}>건강보험</Button>
                  </dd>
                </div>
              </dl>
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <Button onClick={() => signMessage(4)}>실버보험</Button>
                  </dd>
                </div>
              </dl>
              <dl className="divide-y divide-gray-100" style={{ maxWidth: "400px" }}>
                {/* {result && (
                  <div className="mt-6">
                    <h2>서명 결과:</h2>
                    <p>{result}</p>
                  </div>
                )} */}
              </dl>
            </div>
          </>
          :
          <div>
            <div className="px-4 sm:px-0">
              <h3 className="text-2xl font-semibold leading-7 text-gray-900">보험 정보</h3>
            </div>
            <div className="mt-6">
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">DENTAL</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">치과보험</dd>
                </div>
              </dl>
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">CANCER</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">암보험</dd>
                </div>
              </dl>
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">HEALTH</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">건강보험</dd>
                </div>
              </dl>
              <dl className="divide-y divide-gray-100">
                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt className="text-sm font-medium leading-6 text-gray-900">SILVER</dt>
                  <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">실버보험</dd>
                </div>
              </dl>
            </div>
          </div>
        }
      </div>
    </div>
  );
}
