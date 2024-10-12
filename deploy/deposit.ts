import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
 
const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
    const { deployments, ethers, getNamedAccounts } = hre;
    const { deployer,distributorAddress } = await getNamedAccounts();
    const signer = await ethers.getSigner(deployer);

    // deploy Deposit contract
    const DepositResult = await deployments.deploy("Deposit", {
        from: deployer,
        args: [],
        maxPriorityFeePerGas: ethers.BigNumber.from("5000000000"),
        log: true
    });
    console.log(`Deposit contract address: ${DepositResult.address}`);
    // deploy ProxyAdmin contract
    const ProxyAdminResult = await deployments.deploy("ProxyAdmin", {
        from: deployer,
        args: [],
        maxPriorityFeePerGas: ethers.BigNumber.from("5000000000"),
        log: true
    });
    console.log(`ProxyAdmin contract address: ${ProxyAdminResult.address}`);
    // deploy Proxy contract
    const ProxyResult = await deployments.deploy("DepositProxy", {
        from: deployer,
        args: [DepositResult.address, ProxyAdminResult.address, "0x"],
        maxPriorityFeePerGas: ethers.BigNumber.from("5000000000"),
        log: true,
        contract: "TransparentUpgradeableProxy",
    });
    console.log(`Proxy contract address: ${ProxyResult.address}`);
//     const Deposit = await ethers.getContractAt("Deposit", ProxyResult.address, signer);
//     const CHTTokenDeployment = await deployments.get("CHTToken");
//     const initializeTx = await Deposit.initialize(CHTTokenDeployment.address, distributorAddress, { maxPriorityFeePerGas: ethers.BigNumber.from("5000000000") });
//     await initializeTx.wait();
//     console.log('Deposit contract initilize successfully.');
    // add CHT token minter
//     const CHTToken = await ethers.getContractAt("CHTToken", CHTTokenDeployment.address, signer);
//     const addMinterTx = await CHTToken.addMinter(ProxyResult.address, )
//     await addMinterTx.wait();
//     console.log(`add CHT token minter for Deposit contract successfully`)
}

export default func;
func.tags = ["Deposit"];