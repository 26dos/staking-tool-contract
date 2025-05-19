# Laugh-Storage Staking System Specification

This document outlines the complete interaction flow and contract method usage for the **Laugh-Storage-Staking-Tool**, including the roles of users and verifiers, and all related smart contract APIs.

---

## 📌 Roles

| Role     | Description |
|----------|-------------|
| **User**     | Submits staking requests, unlocks funds, and queries staking records via CLI. |
| **Verifier** | Binds a wallet to CLI, verifies user data usage, and issues datacap (DC) based on staking compliance. |
| **Contract** | Manages FIL staking, unlocking, verifier management, and verified client DC assignment. |

---

## 🖼 System Architecture

![architecture](A_flowchart_infographic_illustrates_a_decentralize.png)

---

## ⚙️ Contract Methods

| Method | Description |
|--------|-------------|
| `stake(uint256 dcAmount, uint256 stakeType)` | Stake FIL in exchange for a datacap allowance. `stakeType`: `0 = public`, `1 = private`. |
| `unlock(uint256 stakeId)` | Unlock previously staked FIL after the staking period ends. |
| `getAllStakeInfo(address user)` | Returns all staking records of the given user. |
| `registerVerifier(address user)` | Adds a verifier (can only be called by contract owner). |
| `addVerifiedClient(address client, uint256 allowance)` | Allows a verifier to issue datacap to the user. |

---

## 🔁 Process Flow

### Step 1: User Stakes FIL via CLI

```bash
laugh-stake stake --amount 10 --dataset-type public
```

➡ Internally calls:

```solidity
stake(10e9, 0)  // 10 TDC for public dataset
```

- 1 FIL is locked as collateral
- Stake record is stored on-chain

---

### Step 2: Verifier Reviews and Issues Datacap

#### 🔐 Verifier Setup

```bash
laugh-stake set-verifier-key --private-key <key>
```

Only contract owner can register a verifier:

```solidity
registerVerifier(verifierAddress)
```

#### 🧾 First-time User Application

Verifier checks if user has an active stake:

```bash
laugh-stake check-user --address 0xUSER
```

If user has valid stake, verifier calls:

```solidity
addVerifiedClient(0xUSER, 10e9)  // issue 10 TDC
```

#### 🔍 Second-time Application

Verifier must check:

- User has an existing active stake
- Data usage is compliant (external/off-chain audit)
- If passed, issue additional datacap:

```solidity
addVerifiedClient(0xUSER, 10e9)  // second allowance
```

---

### Step 3: User Queries & Unlocks Staked FIL

#### Query Stake Records:

```bash
laugh-stake info
```

→ Internally calls:

```solidity
getAllStakeInfo(msg.sender)
```

#### Unlock After Maturity:

```bash
laugh-stake unlock --id 1
```

→ Internally calls:

```solidity
unlock(1)
```

- Contract checks if staking period is over
- If so, staked FIL is returned to the user

---

## 📦 Example Lifecycle Summary

| Action        | Caller | Contract Method |
|---------------|--------|-----------------|
| Stake         | User   | `stake(...)` |
| Verify & Issue | Verifier | `addVerifiedClient(...)` |
| Unlock Funds  | User   | `unlock(...)` |
| Register Verifier | Owner | `registerVerifier(...)` |

---

## ✅ Notes

- All datacap amounts are in bytes (e.g. `10 GiB = 10 * 2^30`)
- Only verifiers registered by the owner may issue datacap
- Stake duration enforcement is handled by the contract logic
