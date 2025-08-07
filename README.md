
# dc-pay-channel-cli Project Contract Interface Description

## 1. Contract Address: 0x5AA7959e43f7BF71C306e58d0887A0B11D9682f7
- **stake(uint256 dcAmount, uint256 stakeType)** method: This method is used to stake FIL. `dcAmount` represents the amount of datacap being requested. `stakeType` represents the type of dataset being applied for: `0` for public dataset, `1` for private dataset.
- **unlock(uint256 stakeId)** method: This method is used to unlock FIL, and can only be called after the staking period has expired.
- **getAllStakeInfo(address user)** method: Retrieves all staking records of the user, returning an array object containing all staking information.

