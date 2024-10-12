// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts-upgradeable/access/Ownable2StepUpgradeable.sol";

contract DcPayChannel is Ownable2StepUpgradeable{
    // 质押的信息结构
    struct Stake {
        uint256 amount;      // 质押FIL数量
        uint256 startTime;   // 质押开始时间
        uint256 lockTime;    // 锁定时间，20天或40天
        bool active;         // 质押是否有效
    }

    // 用户的质押记录结构，用于返回全部质押信息
    struct StakeInfo {
        uint256 stakeId;     // 质押ID
        uint256 amount;      // 质押FIL数量
        uint256 startTime;   // 质押开始时间
        uint256 lockTime;    // 锁定时间
        bool active;         // 质押是否有效
    }

    // 每个地址可以有多条质押记录，使用数组
    mapping(address => Stake[]) public stakes; // 每个地址对应一个质押数组

    // 质押比例和最大申请量
    uint256 public constant FIL_PER_10T = 1 ether; // 10T的DC需要1FIL
    uint256 public constant MAX_DC = 2 * 1024;     // 最大2P

    // 锁定时间常量
    uint256 public constant LOCK_TIME_20_DAYS = 20 days;
    uint256 public constant LOCK_TIME_40_DAYS = 40 days;

    event Staked(address indexed user, uint256 amount, uint256 lockTime, uint256 stakeId);
    event Unstaked(address indexed user, uint256 amount, uint256 stakeId);

    // 质押功能
    function stake(uint256 dcAmount, uint256 stakeType) external payable {
        require(stakeType == 0 || stakeType == 1, "Invalid stake type");
        require(dcAmount <= MAX_DC, "Exceeds max DC");

        // 根据质押类型确定锁定时间
        uint256 lockTime = (stakeType == 0) ? LOCK_TIME_20_DAYS : LOCK_TIME_40_DAYS;

        // 计算所需FIL质押数量
        uint256 requiredFil = (dcAmount / 10) * FIL_PER_10T;
        require(msg.value >= requiredFil, "Insufficient FIL for staking");

        // 存储质押信息到用户的质押记录数组中
        stakes[msg.sender].push(Stake({
            amount: msg.value,
            startTime: block.timestamp,
            lockTime: lockTime,
            active: true
        }));

        // 获取质押的ID
        uint256 stakeId = stakes[msg.sender].length - 1;

        emit Staked(msg.sender, msg.value, lockTime, stakeId);
    }

    // 解锁功能，通过质押记录ID解锁
    function unlock(uint256 stakeId) external {
        require(stakeId < stakes[msg.sender].length, "Invalid stakeId");

        Stake storage userStake = stakes[msg.sender][stakeId];
        require(userStake.active, "Stake is already unlocked");
        require(block.timestamp >= userStake.startTime + userStake.lockTime, "Stake is still locked");

        uint256 amountToReturn = userStake.amount;
        userStake.active = false; // 将该质押标记为无效

        // 返还质押的FIL
        (bool success, ) = msg.sender.call{value: amountToReturn}("");
        require(success, "Transfer failed");

        emit Unstaked(msg.sender, amountToReturn, stakeId);
    }

    // 允许合约接收ETH (FIL)
    receive() external payable {}

    // 获取用户全部质押记录的信息，返回一个包含所有质押信息的数组对象
    function getAllStakeInfo(address user) external view returns (StakeInfo[] memory) {
        uint256 stakeCount = stakes[user].length;
        StakeInfo[] memory allStakeInfo = new StakeInfo[](stakeCount); // 创建一个新的数组

        for (uint256 i = 0; i < stakeCount; i++) {
            Stake memory stakeInfo = stakes[user][i];
            allStakeInfo[i] = StakeInfo({
                stakeId: i,
                amount: stakeInfo.amount,
                startTime: stakeInfo.startTime,
                lockTime: stakeInfo.lockTime,
                active: stakeInfo.active
            });
        }

        return allStakeInfo;
    }

    // 获取用户的质押记录总数
    function getStakeCount(address user) external view returns (uint256) {
        return stakes[user].length;
    }
}