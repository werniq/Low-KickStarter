require("@nomicfoundation/hardhat-toolbox");

const { int } = require("hardhat/internal/core/params/argumentTypes");
// import {abi} from ('./artifacts/contracts/KickStarter.sol/LowkickStarter.json');
const { ethers } = require('hardhat')


async function main() {
    const goal = 10 ** 18
    const endsAt = new Date() + (endssAt * 60 * 60 * 24 * 1000)

    const signer = await ethers.getSigner()
    const Campaign = new ethers.getContractFactory("LowkickStarter")
    // const campaign = await Campaign.attach("0xce5a385b0a39Cf2F9Ca4b5feAcE292158c40bC85")
        

    const tx = await Campaign.connect(signer).start(
        goal,
        endsAt  
    );
    await tx.wait()
    console.log("Success! Campaign created"); 
}
  
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
})