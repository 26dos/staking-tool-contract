/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { ICHTToken, ICHTTokenInterface } from "../../contracts/ICHTToken";

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
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
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
    name: "acceptOwnership",
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
    name: "addBackList",
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
    name: "addMinter",
    outputs: [],
    stateMutability: "nonpayable",
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
    inputs: [],
    name: "getBackList",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
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
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
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
    inputs: [],
    name: "owner",
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
    inputs: [],
    name: "pendingOwner",
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
        name: "account",
        type: "address",
      },
    ],
    name: "removeBackList",
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
    name: "renounceOwnership",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600981526020016821a42a102a37b5b2b760b91b8152506040518060400160405280600381526020016210d21560ea1b8152506200006a620000646200009e60201b60201c565b620000a2565b81516200007f9060059060208501906200011c565b508051620000959060069060208401906200011c565b505050620001ff565b3390565b600180546001600160a01b0319169055620000c981620000cc602090811b620007e817901c565b50565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b8280546200012a90620001c2565b90600052602060002090601f0160209004810192826200014e576000855562000199565b82601f106200016957805160ff191683800117855562000199565b8280016001018555821562000199579182015b82811115620001995782518255916020019190600101906200017c565b50620001a7929150620001ab565b5090565b5b80821115620001a75760008155600101620001ac565b600181811c90821680620001d757607f821691505b60208210811415620001f957634e487b7160e01b600052602260045260246000fd5b50919050565b6112de806200020f6000396000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806379ba5097116100de578063a457c2d711610097578063dd62ed3e11610071578063dd62ed3e14610364578063e30c397814610377578063f2fde38b14610388578063fff58f3a1461039b57600080fd5b8063a457c2d714610312578063a9059cbb14610325578063aa271e1a1461033857600080fd5b806379ba5097146102af57806379cc6790146102b75780638da5cb5b146102ca57806395d89b41146102ef578063983b2d56146102f7578063986502751461030a57600080fd5b8063313ce5671161014b57806340c10f191161012557806340c10f191461025857806342966c681461026b57806370a082311461027e578063715018a6146102a757600080fd5b8063313ce567146102215780633206fa4314610230578063395093511461024557600080fd5b806306fdde0314610193578063095ea7b3146101b157806318160ddd146101d457806323b872dd146101e65780632d771672146101f95780633092afd51461020e575b600080fd5b61019b6103ae565b6040516101a89190611071565b60405180910390f35b6101c46101bf3660046110e2565b610440565b60405190151581526020016101a8565b6004545b6040519081526020016101a8565b6101c46101f436600461110c565b61045a565b61020c610207366004611148565b6104d1565b005b61020c61021c366004611148565b6104e8565b604051601281526020016101a8565b6102386104fc565b6040516101a89190611163565b6101c46102533660046110e2565b61050d565b61020c6102663660046110e2565b61052f565b61020c6102793660046111b0565b61058f565b6101d861028c366004611148565b6001600160a01b031660009081526002602052604090205490565b61020c610599565b61020c6105ad565b61020c6102c53660046110e2565b610624565b6000546001600160a01b03165b6040516001600160a01b0390911681526020016101a8565b61019b610639565b61020c610305366004611148565b610648565b61020c610659565b6101c46103203660046110e2565b610662565b6101c46103333660046110e2565b6106dd565b6101c4610346366004611148565b6001600160a01b031660009081526007602052604090205460ff1690565b6101d86103723660046111c9565b610739565b6001546001600160a01b03166102d7565b61020c610396366004611148565b610764565b61020c6103a9366004611148565b6107d5565b6060600580546103bd906111fc565b80601f01602080910402602001604051908101604052809291908181526020018280546103e9906111fc565b80156104365780601f1061040b57610100808354040283529160200191610436565b820191906000526020600020905b81548152906001019060200180831161041957829003601f168201915b5050505050905090565b60003361044e818585610838565b60019150505b92915050565b600061046760088561095d565b156104af5760405162461bcd60e51b81526020600482015260136024820152721858d8dbdd5b9d081a5b88189858dadb1a5cdd606a1b60448201526064015b60405180910390fd5b336104bb858285610982565b6104c68585856109fc565b506001949350505050565b6104d9610ba7565b6104e4600882610c01565b5050565b6104f0610ba7565b6104f981610c16565b50565b60606105086008610c5f565b905090565b60003361044e8185856105208383610739565b61052a919061124d565b610838565b3360009081526007602052604090205460ff166105855760405162461bcd60e51b815260206004820152601460248201527313db9b1e481b5a5b9d195c8818d85b8818d85b1b60621b60448201526064016104a6565b6104e48282610c6c565b6104f93382610d2d565b6105a1610ba7565b6105ab6000610e59565b565b60015433906001600160a01b0316811461061b5760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b60648201526084016104a6565b6104f981610e59565b61062f823383610982565b6104e48282610d2d565b6060600680546103bd906111fc565b610650610ba7565b6104f981610e72565b6105ab33610c16565b600033816106708286610739565b9050838110156106d05760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016104a6565b6104c68286868403610838565b60006106ea60083361095d565b1561072d5760405162461bcd60e51b81526020600482015260136024820152721858d8dbdd5b9d081a5b88189858dadb1a5cdd606a1b60448201526064016104a6565b3361044e8185856109fc565b6001600160a01b03918216600090815260036020908152604080832093909416825291909152205490565b61076c610ba7565b600180546001600160a01b0383166001600160a01b0319909116811790915561079d6000546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b6107dd610ba7565b6104e4600882610ebe565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6001600160a01b03831661089a5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016104a6565b6001600160a01b0382166108fb5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016104a6565b6001600160a01b0383811660008181526003602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92591015b60405180910390a3505050565b6001600160a01b038116600090815260018301602052604081205415155b9392505050565b600061098e8484610739565b905060001981146109f657818110156109e95760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016104a6565b6109f68484848403610838565b50505050565b6001600160a01b038316610a605760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016104a6565b6001600160a01b038216610ac25760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016104a6565b6001600160a01b03831660009081526002602052604090205481811015610b3a5760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016104a6565b6001600160a01b0380851660008181526002602052604080822086860390559286168082529083902080548601905591517fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef90610b9a9086815260200190565b60405180910390a36109f6565b6000546001600160a01b031633146105ab5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657260448201526064016104a6565b600061097b836001600160a01b038416610ed3565b6001600160a01b038116600081815260076020526040808220805460ff19169055517fe94479a9f7e1952cc78f2d6baab678adc1b772d936c6583def489e524cb666929190a250565b6060600061097b83610f22565b6001600160a01b038216610cc25760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016104a6565b8060046000828254610cd4919061124d565b90915550506001600160a01b0382166000818152600260209081526040808320805486019055518481527fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef910160405180910390a35050565b6001600160a01b038216610d8d5760405162461bcd60e51b815260206004820152602160248201527f45524332303a206275726e2066726f6d20746865207a65726f206164647265736044820152607360f81b60648201526084016104a6565b6001600160a01b03821660009081526002602052604090205481811015610e015760405162461bcd60e51b815260206004820152602260248201527f45524332303a206275726e20616d6f756e7420657863656564732062616c616e604482015261636560f01b60648201526084016104a6565b6001600160a01b03831660008181526002602090815260408083208686039055600480548790039055518581529192917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9101610950565b600180546001600160a01b03191690556104f9816107e8565b6001600160a01b038116600081815260076020526040808220805460ff19166001179055517f6ae172837ea30b801fbfcdd4108aa1d5bf8ff775444fd70256b44e6bf3dfc3f69190a250565b600061097b836001600160a01b038416610f7e565b6000818152600183016020526040812054610f1a57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610454565b506000610454565b606081600001805480602002602001604051908101604052809291908181526020018280548015610f7257602002820191906000526020600020905b815481526020019060010190808311610f5e575b50505050509050919050565b60008181526001830160205260408120548015611067576000610fa2600183611265565b8554909150600090610fb690600190611265565b905081811461101b576000866000018281548110610fd657610fd661127c565b9060005260206000200154905080876000018481548110610ff957610ff961127c565b6000918252602080832090910192909255918252600188019052604090208390555b855486908061102c5761102c611292565b600190038181906000526020600020016000905590558560010160008681526020019081526020016000206000905560019350505050610454565b6000915050610454565b600060208083528351808285015260005b8181101561109e57858101830151858201604001528201611082565b818111156110b0576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b03811681146110dd57600080fd5b919050565b600080604083850312156110f557600080fd5b6110fe836110c6565b946020939093013593505050565b60008060006060848603121561112157600080fd5b61112a846110c6565b9250611138602085016110c6565b9150604084013590509250925092565b60006020828403121561115a57600080fd5b61097b826110c6565b6020808252825182820181905260009190848201906040850190845b818110156111a45783516001600160a01b03168352928401929184019160010161117f565b50909695505050505050565b6000602082840312156111c257600080fd5b5035919050565b600080604083850312156111dc57600080fd5b6111e5836110c6565b91506111f3602084016110c6565b90509250929050565b600181811c9082168061121057607f821691505b6020821081141561123157634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b6000821982111561126057611260611237565b500190565b60008282101561127757611277611237565b500390565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052603160045260246000fdfea264697066735822122006aeafb1152f793d9ea53ac84aa6c25453ec9e7416fcff9472f6ad56d2d9514f64736f6c63430008090033";

type ICHTTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ICHTTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ICHTToken__factory extends ContractFactory {
  constructor(...args: ICHTTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ICHTToken> {
    return super.deploy(overrides || {}) as Promise<ICHTToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ICHTToken {
    return super.attach(address) as ICHTToken;
  }
  override connect(signer: Signer): ICHTToken__factory {
    return super.connect(signer) as ICHTToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ICHTTokenInterface {
    return new utils.Interface(_abi) as ICHTTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ICHTToken {
    return new Contract(address, _abi, signerOrProvider) as ICHTToken;
  }
}
