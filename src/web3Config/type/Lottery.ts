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
} from "./common";

export interface LotteryInterface extends utils.Interface {
  functions: {
    "buyTickets(uint32[])": FunctionFragment;
    "claimFreeTickets(uint32[])": FunctionFragment;
    "claimReward(uint256)": FunctionFragment;
    "drawFinalNumberAndMakeLotteryClaimable(uint32)": FunctionFragment;
    "newLottery()": FunctionFragment;
    "_lotteries(uint256)": FunctionFragment;
    "_numberTicketsPerLotteryId(uint256,uint32)": FunctionFragment;
    "_userTicketIdsPerLotteryId(address,uint256,uint32)": FunctionFragment;
    "cakeToken()": FunctionFragment;
    "checkFreeTicketsClaimable(address)": FunctionFragment;
    "currentLotteryId()": FunctionFragment;
    "discountNumber(address,uint256)": FunctionFragment;
    "fee_rate()": FunctionFragment;
    "first10000(uint256)": FunctionFragment;
    "first120000(uint256)": FunctionFragment;
    "first1200000(uint256)": FunctionFragment;
    "first250000(uint256)": FunctionFragment;
    "first50000(uint256)": FunctionFragment;
    "first600000(uint256)": FunctionFragment;
    "freeTicketsClaimed(address,uint256)": FunctionFragment;
    "getfirst10000()": FunctionFragment;
    "getfirst120000()": FunctionFragment;
    "getfirst1200000()": FunctionFragment;
    "getfirst250000()": FunctionFragment;
    "getfirst50000()": FunctionFragment;
    "getfirst600000()": FunctionFragment;
    "getLeaderboard()": FunctionFragment;
    "isClaimed(address,uint256)": FunctionFragment;
    "isInLeaderBoard(address,uint32)": FunctionFragment;
    "owner()": FunctionFragment;
    "pricePerTicket()": FunctionFragment;
    "rewardCalculate(address,uint256)": FunctionFragment;
    "tier1_rate()": FunctionFragment;
    "tier2_rate()": FunctionFragment;
    "tier3_rate()": FunctionFragment;
    "top10Address(uint256)": FunctionFragment;
    "totalReward()": FunctionFragment;
    "totalRewardPendingForClaim()": FunctionFragment;
    "totalTicket()": FunctionFragment;
    "totalTicketByUser(address,uint256)": FunctionFragment;
    "totalTicketByUser2(address)": FunctionFragment;
    "validator()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "buyTickets"
      | "claimFreeTickets"
      | "claimReward"
      | "drawFinalNumberAndMakeLotteryClaimable"
      | "newLottery"
      | "_lotteries"
      | "_numberTicketsPerLotteryId"
      | "_userTicketIdsPerLotteryId"
      | "cakeToken"
      | "checkFreeTicketsClaimable"
      | "currentLotteryId"
      | "discountNumber"
      | "fee_rate"
      | "first10000"
      | "first120000"
      | "first1200000"
      | "first250000"
      | "first50000"
      | "first600000"
      | "freeTicketsClaimed"
      | "getfirst10000"
      | "getfirst120000"
      | "getfirst1200000"
      | "getfirst250000"
      | "getfirst50000"
      | "getfirst600000"
      | "getLeaderboard"
      | "isClaimed"
      | "isInLeaderBoard"
      | "owner"
      | "pricePerTicket"
      | "rewardCalculate"
      | "tier1_rate"
      | "tier2_rate"
      | "tier3_rate"
      | "top10Address"
      | "totalReward"
      | "totalRewardPendingForClaim"
      | "totalTicket"
      | "totalTicketByUser"
      | "totalTicketByUser2"
      | "validator"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "buyTickets",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimFreeTickets",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimReward",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "drawFinalNumberAndMakeLotteryClaimable",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "newLottery",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "_lotteries",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "_numberTicketsPerLotteryId",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "_userTicketIdsPerLotteryId",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "cakeToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "checkFreeTicketsClaimable",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "currentLotteryId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "discountNumber",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "fee_rate", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "first10000",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "first120000",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "first1200000",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "first250000",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "first50000",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "first600000",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "freeTicketsClaimed",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getfirst10000",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getfirst120000",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getfirst1200000",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getfirst250000",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getfirst50000",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getfirst600000",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getLeaderboard",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isClaimed",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "isInLeaderBoard",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pricePerTicket",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rewardCalculate",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "tier1_rate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tier2_rate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tier3_rate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "top10Address",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalReward",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalRewardPendingForClaim",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalTicket",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "totalTicketByUser",
    values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "totalTicketByUser2",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "validator", values?: undefined): string;

  decodeFunctionResult(functionFragment: "buyTickets", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimFreeTickets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "drawFinalNumberAndMakeLotteryClaimable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "newLottery", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "_lotteries", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "_numberTicketsPerLotteryId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "_userTicketIdsPerLotteryId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cakeToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "checkFreeTicketsClaimable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentLotteryId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "discountNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "fee_rate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "first10000", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "first120000",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "first1200000",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "first250000",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "first50000", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "first600000",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "freeTicketsClaimed",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getfirst10000",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getfirst120000",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getfirst1200000",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getfirst250000",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getfirst50000",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getfirst600000",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLeaderboard",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isInLeaderBoard",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pricePerTicket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rewardCalculate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tier1_rate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tier2_rate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tier3_rate", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "top10Address",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalReward",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalRewardPendingForClaim",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalTicket",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalTicketByUser",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "totalTicketByUser2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "validator", data: BytesLike): Result;

  events: {
    "TicketsPurchase(address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TicketsPurchase"): EventFragment;
}

export interface TicketsPurchaseEventObject {
  buyer: string;
  lotteryId: BigNumber;
  numberTickets: BigNumber;
}
export type TicketsPurchaseEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  TicketsPurchaseEventObject
>;

export type TicketsPurchaseEventFilter = TypedEventFilter<TicketsPurchaseEvent>;

export interface Lottery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LotteryInterface;

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
    buyTickets(
      _ticketNumbers: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimFreeTickets(
      _ticketNumbers: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimReward(
      lotteryId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    drawFinalNumberAndMakeLotteryClaimable(
      finalNumber: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    newLottery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    _lotteries(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        number
      ] & {
        status: number;
        blockStart: BigNumber;
        blockEnd: BigNumber;
        priceTicketInCake: BigNumber;
        totalReward: BigNumber;
        tier1Number: number;
        tier2Number: number;
        tier3Number: number;
        countWinnersTier1: BigNumber;
        countWinnersTier2: BigNumber;
        countWinnersTier3: BigNumber;
        finalNumber: number;
      }
    >;

    _numberTicketsPerLotteryId(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    _userTicketIdsPerLotteryId(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    cakeToken(overrides?: CallOverrides): Promise<[string]>;

    checkFreeTicketsClaimable(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    currentLotteryId(overrides?: CallOverrides): Promise<[BigNumber]>;

    discountNumber(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    fee_rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    first10000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    first120000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    first1200000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    first250000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    first50000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    first600000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    freeTicketsClaimed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getfirst10000(overrides?: CallOverrides): Promise<[string[]]>;

    getfirst120000(overrides?: CallOverrides): Promise<[string[]]>;

    getfirst1200000(overrides?: CallOverrides): Promise<[string[]]>;

    getfirst250000(overrides?: CallOverrides): Promise<[string[]]>;

    getfirst50000(overrides?: CallOverrides): Promise<[string[]]>;

    getfirst600000(overrides?: CallOverrides): Promise<[string[]]>;

    getLeaderboard(overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;

    isClaimed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isInLeaderBoard(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    pricePerTicket(overrides?: CallOverrides): Promise<[BigNumber]>;

    rewardCalculate(
      _address: PromiseOrValue<string>,
      lotteryId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tier1_rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    tier2_rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    tier3_rate(overrides?: CallOverrides): Promise<[BigNumber]>;

    top10Address(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    totalReward(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalRewardPendingForClaim(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalTicket(overrides?: CallOverrides): Promise<[BigNumber]>;

    totalTicketByUser(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    totalTicketByUser2(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    validator(overrides?: CallOverrides): Promise<[string]>;
  };

  buyTickets(
    _ticketNumbers: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimFreeTickets(
    _ticketNumbers: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimReward(
    lotteryId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  drawFinalNumberAndMakeLotteryClaimable(
    finalNumber: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  newLottery(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  _lotteries(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      number,
      number,
      number,
      BigNumber,
      BigNumber,
      BigNumber,
      number
    ] & {
      status: number;
      blockStart: BigNumber;
      blockEnd: BigNumber;
      priceTicketInCake: BigNumber;
      totalReward: BigNumber;
      tier1Number: number;
      tier2Number: number;
      tier3Number: number;
      countWinnersTier1: BigNumber;
      countWinnersTier2: BigNumber;
      countWinnersTier3: BigNumber;
      finalNumber: number;
    }
  >;

  _numberTicketsPerLotteryId(
    arg0: PromiseOrValue<BigNumberish>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  _userTicketIdsPerLotteryId(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    arg2: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  cakeToken(overrides?: CallOverrides): Promise<string>;

  checkFreeTicketsClaimable(
    _address: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  currentLotteryId(overrides?: CallOverrides): Promise<BigNumber>;

  discountNumber(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  fee_rate(overrides?: CallOverrides): Promise<BigNumber>;

  first10000(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  first120000(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  first1200000(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  first250000(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  first50000(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  first600000(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  freeTicketsClaimed(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getfirst10000(overrides?: CallOverrides): Promise<string[]>;

  getfirst120000(overrides?: CallOverrides): Promise<string[]>;

  getfirst1200000(overrides?: CallOverrides): Promise<string[]>;

  getfirst250000(overrides?: CallOverrides): Promise<string[]>;

  getfirst50000(overrides?: CallOverrides): Promise<string[]>;

  getfirst600000(overrides?: CallOverrides): Promise<string[]>;

  getLeaderboard(overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;

  isClaimed(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isInLeaderBoard(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  owner(overrides?: CallOverrides): Promise<string>;

  pricePerTicket(overrides?: CallOverrides): Promise<BigNumber>;

  rewardCalculate(
    _address: PromiseOrValue<string>,
    lotteryId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tier1_rate(overrides?: CallOverrides): Promise<BigNumber>;

  tier2_rate(overrides?: CallOverrides): Promise<BigNumber>;

  tier3_rate(overrides?: CallOverrides): Promise<BigNumber>;

  top10Address(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  totalReward(overrides?: CallOverrides): Promise<BigNumber>;

  totalRewardPendingForClaim(overrides?: CallOverrides): Promise<BigNumber>;

  totalTicket(overrides?: CallOverrides): Promise<BigNumber>;

  totalTicketByUser(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  totalTicketByUser2(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  validator(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    buyTickets(
      _ticketNumbers: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimFreeTickets(
      _ticketNumbers: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimReward(
      lotteryId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    drawFinalNumberAndMakeLotteryClaimable(
      finalNumber: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    newLottery(overrides?: CallOverrides): Promise<void>;

    _lotteries(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        number,
        number,
        number,
        BigNumber,
        BigNumber,
        BigNumber,
        number
      ] & {
        status: number;
        blockStart: BigNumber;
        blockEnd: BigNumber;
        priceTicketInCake: BigNumber;
        totalReward: BigNumber;
        tier1Number: number;
        tier2Number: number;
        tier3Number: number;
        countWinnersTier1: BigNumber;
        countWinnersTier2: BigNumber;
        countWinnersTier3: BigNumber;
        finalNumber: number;
      }
    >;

    _numberTicketsPerLotteryId(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _userTicketIdsPerLotteryId(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cakeToken(overrides?: CallOverrides): Promise<string>;

    checkFreeTicketsClaimable(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    currentLotteryId(overrides?: CallOverrides): Promise<BigNumber>;

    discountNumber(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fee_rate(overrides?: CallOverrides): Promise<BigNumber>;

    first10000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    first120000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    first1200000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    first250000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    first50000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    first600000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    freeTicketsClaimed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getfirst10000(overrides?: CallOverrides): Promise<string[]>;

    getfirst120000(overrides?: CallOverrides): Promise<string[]>;

    getfirst1200000(overrides?: CallOverrides): Promise<string[]>;

    getfirst250000(overrides?: CallOverrides): Promise<string[]>;

    getfirst50000(overrides?: CallOverrides): Promise<string[]>;

    getfirst600000(overrides?: CallOverrides): Promise<string[]>;

    getLeaderboard(overrides?: CallOverrides): Promise<[string[], BigNumber[]]>;

    isClaimed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isInLeaderBoard(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    owner(overrides?: CallOverrides): Promise<string>;

    pricePerTicket(overrides?: CallOverrides): Promise<BigNumber>;

    rewardCalculate(
      _address: PromiseOrValue<string>,
      lotteryId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tier1_rate(overrides?: CallOverrides): Promise<BigNumber>;

    tier2_rate(overrides?: CallOverrides): Promise<BigNumber>;

    tier3_rate(overrides?: CallOverrides): Promise<BigNumber>;

    top10Address(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    totalReward(overrides?: CallOverrides): Promise<BigNumber>;

    totalRewardPendingForClaim(overrides?: CallOverrides): Promise<BigNumber>;

    totalTicket(overrides?: CallOverrides): Promise<BigNumber>;

    totalTicketByUser(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalTicketByUser2(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validator(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "TicketsPurchase(address,uint256,uint256)"(
      buyer?: PromiseOrValue<string> | null,
      lotteryId?: PromiseOrValue<BigNumberish> | null,
      numberTickets?: null
    ): TicketsPurchaseEventFilter;
    TicketsPurchase(
      buyer?: PromiseOrValue<string> | null,
      lotteryId?: PromiseOrValue<BigNumberish> | null,
      numberTickets?: null
    ): TicketsPurchaseEventFilter;
  };

  estimateGas: {
    buyTickets(
      _ticketNumbers: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimFreeTickets(
      _ticketNumbers: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimReward(
      lotteryId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    drawFinalNumberAndMakeLotteryClaimable(
      finalNumber: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    newLottery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    _lotteries(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _numberTicketsPerLotteryId(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    _userTicketIdsPerLotteryId(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    cakeToken(overrides?: CallOverrides): Promise<BigNumber>;

    checkFreeTicketsClaimable(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentLotteryId(overrides?: CallOverrides): Promise<BigNumber>;

    discountNumber(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    fee_rate(overrides?: CallOverrides): Promise<BigNumber>;

    first10000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    first120000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    first1200000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    first250000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    first50000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    first600000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    freeTicketsClaimed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getfirst10000(overrides?: CallOverrides): Promise<BigNumber>;

    getfirst120000(overrides?: CallOverrides): Promise<BigNumber>;

    getfirst1200000(overrides?: CallOverrides): Promise<BigNumber>;

    getfirst250000(overrides?: CallOverrides): Promise<BigNumber>;

    getfirst50000(overrides?: CallOverrides): Promise<BigNumber>;

    getfirst600000(overrides?: CallOverrides): Promise<BigNumber>;

    getLeaderboard(overrides?: CallOverrides): Promise<BigNumber>;

    isClaimed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isInLeaderBoard(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    pricePerTicket(overrides?: CallOverrides): Promise<BigNumber>;

    rewardCalculate(
      _address: PromiseOrValue<string>,
      lotteryId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tier1_rate(overrides?: CallOverrides): Promise<BigNumber>;

    tier2_rate(overrides?: CallOverrides): Promise<BigNumber>;

    tier3_rate(overrides?: CallOverrides): Promise<BigNumber>;

    top10Address(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalReward(overrides?: CallOverrides): Promise<BigNumber>;

    totalRewardPendingForClaim(overrides?: CallOverrides): Promise<BigNumber>;

    totalTicket(overrides?: CallOverrides): Promise<BigNumber>;

    totalTicketByUser(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    totalTicketByUser2(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    validator(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    buyTickets(
      _ticketNumbers: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimFreeTickets(
      _ticketNumbers: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimReward(
      lotteryId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    drawFinalNumberAndMakeLotteryClaimable(
      finalNumber: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    newLottery(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    _lotteries(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _numberTicketsPerLotteryId(
      arg0: PromiseOrValue<BigNumberish>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    _userTicketIdsPerLotteryId(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      arg2: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    cakeToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    checkFreeTicketsClaimable(
      _address: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentLotteryId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    discountNumber(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    fee_rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    first10000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    first120000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    first1200000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    first250000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    first50000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    first600000(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    freeTicketsClaimed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getfirst10000(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getfirst120000(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getfirst1200000(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getfirst250000(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getfirst50000(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getfirst600000(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getLeaderboard(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isClaimed(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isInLeaderBoard(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pricePerTicket(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rewardCalculate(
      _address: PromiseOrValue<string>,
      lotteryId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tier1_rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tier2_rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tier3_rate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    top10Address(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalReward(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalRewardPendingForClaim(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalTicket(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalTicketByUser(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    totalTicketByUser2(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validator(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
