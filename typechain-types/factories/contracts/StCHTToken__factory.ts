/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  StCHTToken,
  StCHTTokenInterface,
} from "../../contracts/StCHTToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "BurnFrom",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "fromDelegate",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "toDelegate",
        type: "address",
      },
    ],
    name: "DelegateChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "delegate",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "previousBalance",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newBalance",
        type: "uint256",
      },
    ],
    name: "DelegateVotesChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "MinterAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "MinterRemoved",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "TOTAL_SUPPLY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "addMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "pos",
        type: "uint32",
      },
    ],
    name: "checkpoints",
    outputs: [
      {
        components: [
          {
            internalType: "uint32",
            name: "fromBlock",
            type: "uint32",
          },
          {
            internalType: "uint224",
            name: "votes",
            type: "uint224",
          },
        ],
        internalType: "struct ERC20VotesUpgradeable.Checkpoint",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
    ],
    name: "delegate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "delegatee",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "delegateBySig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "delegates",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastTotalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "blockNumber",
        type: "uint256",
      },
    ],
    name: "getPastVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "isMinter",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "numCheckpoints",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_account",
        type: "address",
      },
    ],
    name: "removeMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceMinter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052600060ff553480156200001657600080fd5b506200002162000039565b60fe80546001600160a01b03191633179055620000fb565b600054610100900460ff1615620000a65760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff9081161015620000f9576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b6128e1806200010b6000396000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c806379cc67901161011a5780639ab24eb0116100ad578063c3cda5201161007c578063c3cda52014610438578063d505accf1461044b578063dd62ed3e1461045e578063f1127ed814610471578063f851a440146104ae57600080fd5b80639ab24eb0146103d2578063a457c2d7146103e5578063a9059cbb146103f8578063aa271e1a1461040b57600080fd5b8063902d55a5116100e9578063902d55a51461039c57806395d89b41146103af578063983b2d56146103b757806398650275146103ca57600080fd5b806379cc67901461035b5780637ecebe001461036e5780638129fc1c146103815780638e539e8c1461038957600080fd5b80633950935111610192578063587cde1e11610161578063587cde1e146102e25780635c19a95c1461030d5780636fcfff451461032057806370a082311461034857600080fd5b806339509351146102965780633a46b1a8146102a957806340c10f19146102bc57806342966c68146102cf57600080fd5b806323b872dd116101ce57806323b872dd146102575780633092afd51461026a578063313ce5671461027f5780633644e5151461028e57600080fd5b8063045b7dca1461020057806306fdde0314610217578063095ea7b31461022c57806318160ddd1461024f575b600080fd5b60ff545b6040519081526020015b60405180910390f35b61021f6104c1565b60405161020e91906124c2565b61023f61023a366004612533565b610553565b604051901515815260200161020e565b603554610204565b61023f61026536600461255d565b610584565b61027d610278366004612599565b6105d5565b005b6040516012815260200161020e565b610204610614565b61023f6102a4366004612533565b610623565b6102046102b7366004612533565b61066f565b61027d6102ca366004612533565b610706565b61027d6102dd3660046125b4565b610822565b6102f56102f0366004612599565b6108a4565b6040516001600160a01b03909116815260200161020e565b61027d61031b366004612599565b6108df565b61033361032e366004612599565b610902565b60405163ffffffff909116815260200161020e565b610204610356366004612599565b610942565b61027d610369366004612533565b61097a565b61020461037c366004612599565b610a32565b61027d610a71565b6102046103973660046125b4565b610be9565b6102046b019d971e4fe8401e7400000081565b61021f610c45565b61027d6103c5366004612599565b610c54565b61027d610c87565b6102046103e0366004612599565b610c92565b61023f6103f3366004612533565b610d30565b61023f610406366004612533565b610dcc565b61023f610419366004612599565b6001600160a01b03166000908152610100602052604090205460ff1690565b61027d6104463660046125de565b610ded565b61027d610459366004612636565b610f41565b61020461046c3660046126a0565b6110bc565b61048461047f3660046126d3565b611129565b60408051825163ffffffff1681526020928301516001600160e01b0316928101929092520161020e565b60fe546102f5906001600160a01b031681565b6060603680546104d090612713565b80601f01602080910402602001604051908101604052809291908181526020018280546104fc90612713565b80156105495780601f1061051e57610100808354040283529160200191610549565b820191906000526020600020905b81548152906001019060200180831161052c57829003601f168201915b5050505050905090565b60003361057a610562826111ca565b610574866001600160a01b03166111ca565b85611211565b5060019392505050565b6000610598846001600160a01b03166111ca565b9350336105ae856105a8836111ca565b8561132d565b6105ca856105c4866001600160a01b03166111ca565b856113a7565b506001949350505050565b60fe546001600160a01b031633146106085760405162461bcd60e51b81526004016105ff90612748565b60405180910390fd5b61061181611558565b50565b600061061e6115a2565b905090565b6000610637836001600160a01b03166111ca565b9250600061064e335b6001600160a01b03166111ca565b905061057a81858561066085896110bc565b61066a919061279f565b611211565b60004382106106c05760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064016105ff565b6106ff60cd60006106d9866001600160a01b03166111ca565b6001600160a01b03166001600160a01b031681526020019081526020016000208361161d565b9392505050565b336000908152610100602052604090205460ff166107365760405162461bcd60e51b81526004016105ff906127b7565b610748826001600160a01b03166111ca565b91506b019d971e4fe8401e7400000060ff5482610765919061279f565b11156107be5760405162461bcd60e51b815260206004820152602260248201527f434854546f6b656e3a20746f74616c20737570706c79206f766572666c6f77696044820152616e6760f01b60648201526084016105ff565b6107c88282611714565b8060ff60008282546107da919061279f565b90915550506040518181526001600160a01b038316907f0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885906020015b60405180910390a25050565b336000908152610100602052604090205460ff166108525760405162461bcd60e51b81526004016105ff906127b7565b600061085d33610640565b9050610869818361179e565b806001600160a01b03167fcc16f5dbb4873280815c1ee09dbd06736cffcc184412cf7a71a0fdb75d397ca58360405161081691815260200190565b600060cc60006108bc846001600160a01b03166111ca565b6001600160a01b0390811682526020820192909252604001600020541692915050565b6106116108eb33610640565b6108fd836001600160a01b03166111ca565b6117b6565b600061093c60cd600061091d856001600160a01b03166111ca565b6001600160a01b03168152602081019190915260400160002054611836565b92915050565b60006033600061095a846001600160a01b03166111ca565b6001600160a01b0316815260208101919091526040016000205492915050565b336000908152610100602052604090205460ff166109aa5760405162461bcd60e51b81526004016105ff906127b7565b6109bc826001600160a01b03166111ca565b915060006109c933610640565b90506109d683828461132d565b6109e0838361179e565b826001600160a01b0316816001600160a01b03167f3c7611a5be35512cb20a6f2f039b47efb0d70f9c538e3886fa3f3e9c32af924f84604051610a2591815260200190565b60405180910390a3505050565b600061093c60996000610a4d856001600160a01b03166111ca565b6001600160a01b03166001600160a01b031681526020019081526020016000205490565b600054610100900460ff1615808015610a915750600054600160ff909116105b80610aab5750303b158015610aab575060005460ff166001145b610b0e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016105ff565b6000805460ff191660011790558015610b31576000805461ff0019166101001790555b610b776040518060400160405280600981526020016821a42a102a37b5b2b760b91b8152506040518060400160405280600381526020016210d21560ea1b81525061189f565b610ba16040518060400160405280600981526020016821a42a102a37b5b2b760b91b8152506118d4565b8015610611576000805461ff0019169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a150565b6000438210610c3a5760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064016105ff565b61093c60ce8361161d565b6060603780546104d090612713565b60fe546001600160a01b03163314610c7e5760405162461bcd60e51b81526004016105ff90612748565b6106118161191e565b610c9033611558565b565b6000610ca6826001600160a01b03166111ca565b6001600160a01b038116600090815260cd60205260409020549092508015610d1d576001600160a01b038316600090815260cd60205260409020610ceb6001836127e5565b81548110610cfb57610cfb6127fc565b60009182526020909120015464010000000090046001600160e01b0316610d20565b60005b6001600160e01b03169392505050565b6000610d44836001600160a01b03166111ca565b92506000610d5133610640565b90506000610d5f82866110bc565b905083811015610dbf5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016105ff565b6105ca8286868403611211565b60003361057a610ddb826111ca565b6105c4866001600160a01b03166111ca565b610dff866001600160a01b03166111ca565b955083421115610e515760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e6174757265206578706972656400000060448201526064016105ff565b6000610ed5610640610ecd7fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf8a8a8a604051602001610eb294939291909384526001600160a01b039290921660208401526040830152606082015260800190565b6040516020818303038152906040528051906020012061196b565b8686866119b9565b9050610ee0816119e1565b8614610f2e5760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e63650000000000000060448201526064016105ff565b610f3881886117b6565b50505050505050565b610f53876001600160a01b03166111ca565b965083421115610fa55760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016105ff565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9888888610fd48c6119e1565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e001604051602081830303815290604052805190602001209050600061102f8261196b565b90506000611042610640838888886119b9565b9050896001600160a01b0316816001600160a01b0316146110a55760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016105ff565b6110b08a8a8a611211565b50505050505050505050565b6000603460006110d4856001600160a01b03166111ca565b6001600160a01b03166001600160a01b031681526020019081526020016000206000611108846001600160a01b03166111ca565b6001600160a01b031681526020810191909152604001600020549392505050565b604080518082019091526000808252602082015260cd6000611153856001600160a01b03166111ca565b6001600160a01b03166001600160a01b031681526020019081526020016000208263ffffffff168154811061118a5761118a6127fc565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b60008060006111d884611a09565b91509150816111e957509192915050565b6000806111f583611a47565b9150915081611208575093949350505050565b95945050505050565b6001600160a01b0383166112735760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016105ff565b6001600160a01b0382166112d45760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016105ff565b6001600160a01b0383811660008181526034602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259101610a25565b600061133984846110bc565b905060001981146113a157818110156113945760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016105ff565b6113a18484848403611211565b50505050565b6001600160a01b03831661140b5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016105ff565b6001600160a01b03821661146d5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016105ff565b6001600160a01b038316600090815260336020526040902054818110156114e55760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016105ff565b6001600160a01b0380851660008181526033602052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef906115459086815260200190565b60405180910390a36113a1848484611ab6565b6001600160a01b03811660008181526101006020526040808220805460ff19169055517fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb666929190a250565b600061061e7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6115d160655490565b6066546040805160208101859052908101839052606081018290524660808201523060a082015260009060c0016040516020818303038152906040528051906020012090509392505050565b81546000908181600581111561167757600061163884611ad1565b61164290856127e5565b600088815260209020909150869082015463ffffffff16111561166757809150611675565b61167281600161279f565b92505b505b808210156116c457600061168b8383611bb6565b600088815260209020909150869082015463ffffffff1611156116b0578091506116be565b6116bb81600161279f565b92505b50611677565b80156116fe576116e7866116d96001846127e5565b600091825260209091200190565b5464010000000090046001600160e01b0316611701565b60005b6001600160e01b03169695505050505050565b61171e8282611bd1565b6035546001600160e01b0310156117905760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b60648201526084016105ff565b6113a160ce611c9a83611ca6565b6117a88282611dfa565b6113a160ce611f3583611ca6565b60006117c1836108a4565b905060006117ce84610942565b6001600160a01b03858116600081815260cc602052604080822080546001600160a01b031916898616908117909155905194955093928616927f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a46113a1828483611f41565b600063ffffffff82111561189b5760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b60648201526084016105ff565b5090565b600054610100900460ff166118c65760405162461bcd60e51b81526004016105ff90612812565b6118d0828261207e565b5050565b600054610100900460ff166118fb5760405162461bcd60e51b81526004016105ff90612812565b61061181604051806040016040528060018152602001603160f81b8152506120cc565b6001600160a01b03811660008181526101006020526040808220805460ff19166001179055517f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f69190a250565b600061093c6119786115a2565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006119ca8787878761210d565b915091506119d7816121d1565b5095945050505050565b6001600160a01b03811660009081526099602052604090208054600181018255905b50919050565b60008073ffffffffffffffffffffffff0000000000000000831660ff60981b811415611a41576001925067ffffffffffffffff841691505b50915091565b600080826000526016600a602060006002607f60991b015afa9150600051806001600160a01b031691508060a01c61ffff16905061040a8114611a8d5760009250600091505b50811580611a9c57503d601614155b15611aac57506000928392509050565b915091565b505050565b611ab1611ac2846108a4565b611acb846108a4565b83611f41565b600081611ae057506000919050565b60006001611aed8461231f565b901c6001901b90506001818481611b0657611b0661285d565b048201901c90506001818481611b1e57611b1e61285d565b048201901c90506001818481611b3657611b3661285d565b048201901c90506001818481611b4e57611b4e61285d565b048201901c90506001818481611b6657611b6661285d565b048201901c90506001818481611b7e57611b7e61285d565b048201901c90506001818481611b9657611b9661285d565b048201901c90506106ff81828581611bb057611bb061285d565b046123b3565b6000611bc56002848418612873565b6106ff9084841661279f565b6001600160a01b038216611c275760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016105ff565b8060356000828254611c39919061279f565b90915550506001600160a01b0382166000818152603360209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a36118d060008383611ab6565b60006106ff828461279f565b82546000908190818115611cf357611cc3876116d96001856127e5565b60408051808201909152905463ffffffff8116825264010000000090046001600160e01b03166020820152611d08565b60408051808201909152600080825260208201525b905080602001516001600160e01b03169350611d2884868863ffffffff16565b9250600082118015611d405750805163ffffffff1643145b15611d8557611d4e836123c9565b611d5d886116d96001866127e5565b80546001600160e01b03929092166401000000000263ffffffff909216919091179055611df0565b866040518060400160405280611d9a43611836565b63ffffffff168152602001611dae866123c9565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b5050935093915050565b6001600160a01b038216611e5a5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016105ff565b6001600160a01b03821660009081526033602052604090205481811015611ece5760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016105ff565b6001600160a01b03831660008181526033602090815260408083208686039055603580548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a3611ab183600084611ab6565b60006106ff82846127e5565b816001600160a01b0316836001600160a01b031614158015611f635750600081115b15611ab1576001600160a01b03831615611ff1576001600160a01b038316600090815260cd602052604081208190611f9e90611f3585611ca6565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611fe6929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615611ab1576001600160a01b038216600090815260cd60205260408120819061202790611c9a85611ca6565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724838360405161206f929190918252602082015260400190565b60405180910390a25050505050565b600054610100900460ff166120a55760405162461bcd60e51b81526004016105ff90612812565b81516120b8906036906020850190612432565b508051611ab1906037906020840190612432565b600054610100900460ff166120f35760405162461bcd60e51b81526004016105ff90612812565b815160209283012081519190920120606591909155606655565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a083111561214457506000905060036121c8565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015612198573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166121c1576000600192509250506121c8565b9150600090505b94509492505050565b60008160048111156121e5576121e5612895565b14156121ee5750565b600181600481111561220257612202612895565b14156122505760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016105ff565b600281600481111561226457612264612895565b14156122b25760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016105ff565b60038160048111156122c6576122c6612895565b14156106115760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016105ff565b600080608083901c1561233457608092831c92015b604083901c1561234657604092831c92015b602083901c1561235857602092831c92015b601083901c1561236a57601092831c92015b600883901c1561237c57600892831c92015b600483901c1561238e57600492831c92015b600283901c156123a057600292831c92015b600183901c1561093c5760010192915050565b60008183106123c257816106ff565b5090919050565b60006001600160e01b0382111561189b5760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b60648201526084016105ff565b82805461243e90612713565b90600052602060002090601f01602090048101928261246057600085556124a6565b82601f1061247957805160ff19168380011785556124a6565b828001600101855582156124a6579182015b828111156124a657825182559160200191906001019061248b565b5061189b9291505b8082111561189b57600081556001016124ae565b600060208083528351808285015260005b818110156124ef578581018301518582016040015282016124d3565b81811115612501576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b038116811461252e57600080fd5b919050565b6000806040838503121561254657600080fd5b61254f83612517565b946020939093013593505050565b60008060006060848603121561257257600080fd5b61257b84612517565b925061258960208501612517565b9150604084013590509250925092565b6000602082840312156125ab57600080fd5b6106ff82612517565b6000602082840312156125c657600080fd5b5035919050565b803560ff8116811461252e57600080fd5b60008060008060008060c087890312156125f757600080fd5b61260087612517565b9550602087013594506040870135935061261c606088016125cd565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a03121561265157600080fd5b61265a88612517565b965061266860208901612517565b95506040880135945060608801359350612684608089016125cd565b925060a0880135915060c0880135905092959891949750929550565b600080604083850312156126b357600080fd5b6126bc83612517565b91506126ca60208401612517565b90509250929050565b600080604083850312156126e657600080fd5b6126ef83612517565b9150602083013563ffffffff8116811461270857600080fd5b809150509250929050565b600181811c9082168061272757607f821691505b60208210811415611a0357634e487b7160e01b600052602260045260246000fd5b60208082526021908201527f4f6e6c792061646d696e2063616e2063616c6c20746869732066756e6374696f6040820152603760f91b606082015260800190565b634e487b7160e01b600052601160045260246000fd5b600082198211156127b2576127b2612789565b500190565b60208082526014908201527313db9b1e481b5a5b9d195c8818d85b8818d85b1b60621b604082015260600190565b6000828210156127f7576127f7612789565b500390565b634e487b7160e01b600052603260045260246000fd5b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b60008261289057634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220245d5fb6aba60ecff9edaf74b481d56307f04f6b2c47ecc6af65472369d0451064736f6c63430008090033";

type StCHTTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: StCHTTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class StCHTToken__factory extends ContractFactory {
  constructor(...args: StCHTTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<StCHTToken> {
    return super.deploy(overrides || {}) as Promise<StCHTToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): StCHTToken {
    return super.attach(address) as StCHTToken;
  }
  override connect(signer: Signer): StCHTToken__factory {
    return super.connect(signer) as StCHTToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): StCHTTokenInterface {
    return new utils.Interface(_abi) as StCHTTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StCHTToken {
    return new Contract(address, _abi, signerOrProvider) as StCHTToken;
  }
}
