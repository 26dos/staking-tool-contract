/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  DcPayChannel,
  DcPayChannelInterface,
} from "../../contracts/DcPayChannel";

const _abi = [
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
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lockTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stakeId",
        type: "uint256",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "stakeId",
        type: "uint256",
      },
    ],
    name: "Unstaked",
    type: "event",
  },
  {
    inputs: [],
    name: "FIL_PER_10T",
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
    name: "LOCK_TIME_20_DAYS",
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
    name: "LOCK_TIME_40_DAYS",
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
    name: "MAX_DC",
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
    name: "acceptOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getAllStakeInfo",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "stakeId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "startTime",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lockTime",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "active",
            type: "bool",
          },
        ],
        internalType: "struct DcPayChannel.StakeInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getStakeCount",
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
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "dcAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stakeType",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stakes",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockTime",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "active",
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
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stakeId",
        type: "uint256",
      },
    ],
    name: "unlock",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610c8a806100206000396000f3fe6080604052600436106100e15760003560e01c80638da5cb5b1161007f578063d1d7e10a11610059578063d1d7e10a14610267578063e30c397814610283578063f158adf2146102a1578063f2fde38b146102b857600080fd5b80638da5cb5b146101e9578063bb224d6e1461021b578063cf57ee691461023157600080fd5b806361cbfa50116100bb57806361cbfa5014610187578063715018a6146101ac57806379ba5097146101c15780637b0472f0146101d657600080fd5b8063559566b9146100ed578063584b62a1146101235780636198e3391461016557600080fd5b366100e857005b600080fd5b3480156100f957600080fd5b5061010d610108366004610a90565b6102d8565b60405161011a9190610ab2565b60405180910390f35b34801561012f57600080fd5b5061014361013e366004610b22565b610470565b604080519485526020850193909352918301521515606082015260800161011a565b34801561017157600080fd5b50610185610180366004610b4c565b6104b9565b005b34801561019357600080fd5b5061019e6234bc0081565b60405190815260200161011a565b3480156101b857600080fd5b506101856106ca565b3480156101cd57600080fd5b506101856106de565b6101856101e4366004610b65565b610758565b3480156101f557600080fd5b506033546001600160a01b03165b6040516001600160a01b03909116815260200161011a565b34801561022757600080fd5b5061019e61080081565b34801561023d57600080fd5b5061019e61024c366004610a90565b6001600160a01b031660009081526097602052604090205490565b34801561027357600080fd5b5061019e670de0b6b3a764000081565b34801561028f57600080fd5b506065546001600160a01b0316610203565b3480156102ad57600080fd5b5061019e621a5e0081565b3480156102c457600080fd5b506101856102d3366004610a90565b610943565b6001600160a01b0381166000908152609760205260408120546060918167ffffffffffffffff81111561030d5761030d610b87565b60405190808252806020026020018201604052801561037257816020015b61035f6040518060a00160405280600081526020016000815260200160008152602001600081526020016000151581525090565b81526020019060019003908161032b5790505b50905060005b82811015610468576001600160a01b03851660009081526097602052604081208054839081106103aa576103aa610b9d565b90600052602060002090600402016040518060800160405290816000820154815260200160018201548152602001600282015481526020016003820160009054906101000a900460ff16151515158152505090506040518060a001604052808381526020018260000151815260200182602001518152602001826040015181526020018260600151151581525083838151811061044957610449610b9d565b602002602001018190525050808061046090610bc9565b915050610378565b509392505050565b6097602052816000526040600020818154811061048c57600080fd5b60009182526020909120600490910201805460018201546002830154600390930154919450925060ff1684565b33600090815260976020526040902054811061050e5760405162461bcd60e51b815260206004820152600f60248201526e125b9d985b1a59081cdd185ad95259608a1b60448201526064015b60405180910390fd5b33600090815260976020526040812080548390811061052f5761052f610b9d565b60009182526020909120600490910201600381015490915060ff166105965760405162461bcd60e51b815260206004820152601960248201527f5374616b6520697320616c726561647920756e6c6f636b6564000000000000006044820152606401610505565b806002015481600101546105aa9190610be4565b4210156105f15760405162461bcd60e51b815260206004820152601560248201527414dd185ad9481a5cc81cdd1a5b1b081b1bd8dad959605a1b6044820152606401610505565b805460038201805460ff19169055604051600090339083908381818185875af1925050503d8060008114610641576040519150601f19603f3d011682016040523d82523d6000602084013e610646565b606091505b50509050806106895760405162461bcd60e51b815260206004820152600f60248201526e151c985b9cd9995c8819985a5b1959608a1b6044820152606401610505565b604080518381526020810186905233917f7fc4727e062e336010f2c282598ef5f14facb3de68cf8195c2f23e1454b2b74e910160405180910390a250505050565b6106d26109b4565b6106dc6000610a0e565b565b60655433906001600160a01b0316811461074c5760405162461bcd60e51b815260206004820152602960248201527f4f776e61626c6532537465703a2063616c6c6572206973206e6f7420746865206044820152683732bb9037bbb732b960b91b6064820152608401610505565b61075581610a0e565b50565b8015806107655750806001145b6107a65760405162461bcd60e51b8152602060048201526012602482015271496e76616c6964207374616b65207479706560701b6044820152606401610505565b6108008211156107e95760405162461bcd60e51b815260206004820152600e60248201526d45786365656473206d617820444360901b6044820152606401610505565b600081156107fa576234bc006107ff565b621a5e005b90506000670de0b6b3a7640000610817600a86610bfc565b6108219190610c1e565b9050803410156108735760405162461bcd60e51b815260206004820152601c60248201527f496e73756666696369656e742046494c20666f72207374616b696e67000000006044820152606401610505565b33600081815260976020818152604080842081516080810183523481524281850190815292810189815260016060830181815284548083018655858a52878a20945160049091029094019384559451838201559051600283015592516003909101805460ff1916911515919091179055948452919052915490916108f691610c3d565b604080513481526020810186905290810182905290915033907fb4caaf29adda3eefee3ad552a8e85058589bf834c7466cae4ee58787f70589ed9060600160405180910390a25050505050565b61094b6109b4565b606580546001600160a01b0383166001600160a01b0319909116811790915561097c6033546001600160a01b031690565b6001600160a01b03167f38d16b8cac22d99fc7c124b9cd0de2d3fa1faef420bfe791d8c362d765e2270060405160405180910390a350565b6033546001600160a01b031633146106dc5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726044820152606401610505565b606580546001600160a01b031916905561075581603380546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b80356001600160a01b0381168114610a8b57600080fd5b919050565b600060208284031215610aa257600080fd5b610aab82610a74565b9392505050565b602080825282518282018190526000919060409081850190868401855b82811015610b1557815180518552868101518786015285810151868601526060808201519086015260809081015115159085015260a09093019290850190600101610acf565b5091979650505050505050565b60008060408385031215610b3557600080fd5b610b3e83610a74565b946020939093013593505050565b600060208284031215610b5e57600080fd5b5035919050565b60008060408385031215610b7857600080fd5b50508035926020909101359150565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415610bdd57610bdd610bb3565b5060010190565b60008219821115610bf757610bf7610bb3565b500190565b600082610c1957634e487b7160e01b600052601260045260246000fd5b500490565b6000816000190483118215151615610c3857610c38610bb3565b500290565b600082821015610c4f57610c4f610bb3565b50039056fea2646970667358221220dc0366237ce805ea1486026a151169494b3e32655f4a5e25d283917fd8b07e2664736f6c63430008090033";

type DcPayChannelConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DcPayChannelConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DcPayChannel__factory extends ContractFactory {
  constructor(...args: DcPayChannelConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<DcPayChannel> {
    return super.deploy(overrides || {}) as Promise<DcPayChannel>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DcPayChannel {
    return super.attach(address) as DcPayChannel;
  }
  override connect(signer: Signer): DcPayChannel__factory {
    return super.connect(signer) as DcPayChannel__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DcPayChannelInterface {
    return new utils.Interface(_abi) as DcPayChannelInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): DcPayChannel {
    return new Contract(address, _abi, signerOrProvider) as DcPayChannel;
  }
}
