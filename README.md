#

Custom errors are undecoded in view/pure functions.

```plain
  1) custom error in non-view function:
     Error: VM Exception while processing transaction: reverted with custom error 'MyCustomErrror(1)'
    at CustomErrorContract.a (contracts/CustomErrorContract.sol:11)
    at HardhatNode._mineBlockWithPendingTxs (node_modules/hardhat/src/internal/hardhat-network/provider/node.ts:1773:23)
    at HardhatNode.mineBlock (node_modules/hardhat/src/internal/hardhat-network/provider/node.ts:466:16)
    at EthModule._sendTransactionAndReturnHash (node_modules/hardhat/src/internal/hardhat-network/provider/modules/eth.ts:1504:18)
    at HardhatNetworkProvider.request (node_modules/hardhat/src/internal/hardhat-network/provider/provider.ts:118:18)
    at EthersProviderWrapper.send (node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20)

  2) custom error in view function:
     Error: call revert exception [ See: https://links.ethers.org/v5-errors-CALL_EXCEPTION ] (method="b()", data="0x018a07690000000000000000000000000000000000000000000000000000000000000002", errorArgs=[{"type":"BigNumber","hex":"0x02"}], errorName="MyCustomErrror", errorSignature="MyCustomErrror(uint256)", reason=null, code=CALL_EXCEPTION, version=abi/5.6.3)
      at Logger.makeError (node_modules/@ethersproject/logger/src.ts/index.ts:261:28)
      at Logger.throwError (node_modules/@ethersproject/logger/src.ts/index.ts:273:20)
      at Interface.decodeFunctionResult (node_modules/@ethersproject/abi/src.ts/interface.ts:427:23)
      at Contract.<anonymous> (node_modules/@ethersproject/contracts/src.ts/index.ts:400:44)
      at step (node_modules/@ethersproject/contracts/lib/index.js:48:23)
      at Object.next (node_modules/@ethersproject/contracts/lib/index.js:29:53)
      at fulfilled (node_modules/@ethersproject/contracts/lib/index.js:20:58)

  3) custom error in pure function:
     Error: call revert exception [ See: https://links.ethers.org/v5-errors-CALL_EXCEPTION ] (method="c()", data="0x018a07690000000000000000000000000000000000000000000000000000000000000003", errorArgs=[{"type":"BigNumber","hex":"0x03"}], errorName="MyCustomErrror", errorSignature="MyCustomErrror(uint256)", reason=null, code=CALL_EXCEPTION, version=abi/5.6.3)
      at Logger.makeError (node_modules/@ethersproject/logger/src.ts/index.ts:261:28)
      at Logger.throwError (node_modules/@ethersproject/logger/src.ts/index.ts:273:20)
      at Interface.decodeFunctionResult (node_modules/@ethersproject/abi/src.ts/interface.ts:427:23)
      at Contract.<anonymous> (node_modules/@ethersproject/contracts/src.ts/index.ts:400:44)
      at step (node_modules/@ethersproject/contracts/lib/index.js:48:23)
      at Object.next (node_modules/@ethersproject/contracts/lib/index.js:29:53)
      at fulfilled (node_modules/@ethersproject/contracts/lib/index.js:20:58)
```
