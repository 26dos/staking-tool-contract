/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace DcPayChannel {
  export type StakeInfoStruct = {
    stakeId: PromiseOrValue<BigNumberish>;
    amount: PromiseOrValue<BigNumberish>;
    startTime: PromiseOrValue<BigNumberish>;
    lockTime: PromiseOrValue<BigNumberish>;
    active: PromiseOrValue<boolean>;
  };

  export type StakeInfoStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    boolean
  ] & {
    stakeId: BigNumber;
    amount: BigNumber;
    startTime: BigNumber;
    lockTime: BigNumber;
    active: boolean;
  };
}

export interface DcPayChannelInterface extends utils.Interface {
  functions: {
    "FIL_PER_10T()": FunctionFragment;
    "LOCK_TIME_20_DAYS()": FunctionFragment;
    "LOCK_TIME_40_DAYS()": FunctionFragment;
    "MAX_DC()": FunctionFragment;
    "acceptOwnership()": FunctionFragment;
    "getAllStakeInfo(address)": FunctionFragment;
    "getStakeCount(address)": FunctionFragment;
    "owner()": FunctionFragment;
    "pendingOwner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "stake(uint256,uint256)": FunctionFragment;
    "stakes(address,uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unlock(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "FIL_PER_10T"
      | "LOCK_TIME_20_DAYS"
      | "LOCK_TIME_40_DAYS"
      | "MAX_DC"
      | "acceptOwnership"
      | "getAllStakeInfo"
      | "getStakeCount"
      | "owner"
      | "pendingOwner"
      | "renounceOwnership"
      | "stake"
      | "stakes"
      | "transferOwnership"
      | "unlock"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "FIL_PER_10T",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LOCK_TIME_20_DAYS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "LOCK_TIME_40_DAYS",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MAX_DC", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "acceptOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAllStakeInfo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getStakeCount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pendingOwner",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stake",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "stakes",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "unlock",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "FIL_PER_10T",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LOCK_TIME_20_DAYS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "LOCK_TIME_40_DAYS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_DC", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "acceptOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllStakeInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getStakeCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pendingOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "stake", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "stakes", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;

  events: {
    "Initialized(uint8)": EventFragment;
    "OwnershipTransferStarted(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Staked(address,uint256,uint256,uint256)": EventFragment;
    "Unstaked(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferStarted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Staked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unstaked"): EventFragment;
}

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferStartedEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferStartedEvent = TypedEvent<
  [string, string],
  OwnershipTransferStartedEventObject
>;

export type OwnershipTransferStartedEventFilter =
  TypedEventFilter<OwnershipTransferStartedEvent>;

export interface OwnershipTransferredEventObject {
  previousOwner: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface StakedEventObject {
  user: string;
  amount: BigNumber;
  lockTime: BigNumber;
  stakeId: BigNumber;
}
export type StakedEvent = TypedEvent<
  [string, BigNumber, BigNumber, BigNumber],
  StakedEventObject
>;

export type StakedEventFilter = TypedEventFilter<StakedEvent>;

export interface UnstakedEventObject {
  user: string;
  amount: BigNumber;
  stakeId: BigNumber;
}
export type UnstakedEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  UnstakedEventObject
>;

export type UnstakedEventFilter = TypedEventFilter<UnstakedEvent>;

export interface DcPayChannel extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: DcPayChannelInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    FIL_PER_10T(overrides?: CallOverrides): Promise<[BigNumber]>;

    LOCK_TIME_20_DAYS(overrides?: CallOverrides): Promise<[BigNumber]>;

    LOCK_TIME_40_DAYS(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_DC(overrides?: CallOverrides): Promise<[BigNumber]>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getAllStakeInfo(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[DcPayChannel.StakeInfoStructOutput[]]>;

    getStakeCount(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pendingOwner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stake(
      dcAmount: PromiseOrValue<BigNumberish>,
      stakeType: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    stakes(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, boolean] & {
        amount: BigNumber;
        startTime: BigNumber;
        lockTime: BigNumber;
        active: boolean;
      }
    >;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unlock(
      stakeId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  FIL_PER_10T(overrides?: CallOverrides): Promise<BigNumber>;

  LOCK_TIME_20_DAYS(overrides?: CallOverrides): Promise<BigNumber>;

  LOCK_TIME_40_DAYS(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_DC(overrides?: CallOverrides): Promise<BigNumber>;

  acceptOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getAllStakeInfo(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<DcPayChannel.StakeInfoStructOutput[]>;

  getStakeCount(
    user: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  pendingOwner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stake(
    dcAmount: PromiseOrValue<BigNumberish>,
    stakeType: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  stakes(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, BigNumber, boolean] & {
      amount: BigNumber;
      startTime: BigNumber;
      lockTime: BigNumber;
      active: boolean;
    }
  >;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unlock(
    stakeId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    FIL_PER_10T(overrides?: CallOverrides): Promise<BigNumber>;

    LOCK_TIME_20_DAYS(overrides?: CallOverrides): Promise<BigNumber>;

    LOCK_TIME_40_DAYS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_DC(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(overrides?: CallOverrides): Promise<void>;

    getAllStakeInfo(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<DcPayChannel.StakeInfoStructOutput[]>;

    getStakeCount(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    pendingOwner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    stake(
      dcAmount: PromiseOrValue<BigNumberish>,
      stakeType: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    stakes(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, boolean] & {
        amount: BigNumber;
        startTime: BigNumber;
        lockTime: BigNumber;
        active: boolean;
      }
    >;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    unlock(
      stakeId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "OwnershipTransferStarted(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferStartedEventFilter;
    OwnershipTransferStarted(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferStartedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;

    "Staked(address,uint256,uint256,uint256)"(
      user?: PromiseOrValue<string> | null,
      amount?: null,
      lockTime?: null,
      stakeId?: null
    ): StakedEventFilter;
    Staked(
      user?: PromiseOrValue<string> | null,
      amount?: null,
      lockTime?: null,
      stakeId?: null
    ): StakedEventFilter;

    "Unstaked(address,uint256,uint256)"(
      user?: PromiseOrValue<string> | null,
      amount?: null,
      stakeId?: null
    ): UnstakedEventFilter;
    Unstaked(
      user?: PromiseOrValue<string> | null,
      amount?: null,
      stakeId?: null
    ): UnstakedEventFilter;
  };

  estimateGas: {
    FIL_PER_10T(overrides?: CallOverrides): Promise<BigNumber>;

    LOCK_TIME_20_DAYS(overrides?: CallOverrides): Promise<BigNumber>;

    LOCK_TIME_40_DAYS(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_DC(overrides?: CallOverrides): Promise<BigNumber>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getAllStakeInfo(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getStakeCount(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pendingOwner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stake(
      dcAmount: PromiseOrValue<BigNumberish>,
      stakeType: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    stakes(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unlock(
      stakeId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    FIL_PER_10T(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LOCK_TIME_20_DAYS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    LOCK_TIME_40_DAYS(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_DC(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    acceptOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getAllStakeInfo(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getStakeCount(
      user: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pendingOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stake(
      dcAmount: PromiseOrValue<BigNumberish>,
      stakeType: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    stakes(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unlock(
      stakeId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}