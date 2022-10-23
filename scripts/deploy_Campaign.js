// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const { ethers } = require("hardhat")

async function main() {
    const [signer] = await ethers.getSigners();

    // Kickstarter Campaign contract
    const contract1 = await ethers.getContractFactory("Campaign");
    const campaign = await contract1.deploy(
      Date.now() + (3600 * 24),
      10 ** 18,
      signer,
      1
    );
    await campaign.deployed();

    console.log("Campaign contract deployed to: ", campaign.address);
  }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
