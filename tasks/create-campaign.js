// require("@nomicfoundation/hardhat-toolbox");

// const { int } = require("hardhat/internal/core/params/argumentTypes");
// import {abi} from ('./artifacts/contracts/KickStarter.sol/LowkickStarter.json');

// import { task, types } from 'hardhat/config'


// task("create-campaign", "creats kick starter campaign")
//     .addParam('goal', 'Amount of money, that needed for the campaign', 0, int)
//     .addParam('endsat', 'Timestamp, when campaign will be deleted (in days)', 30, int)
//     .setAction(async (taskArgs, { ethers }) => {

//         const { goal, endssAt } = taskArgs
//         const endsAt = new Date() + (endssAt * 60 * 60 * 24 * 1000)

//         const signer = await ethers.getSigner()
//         const Campaign = new ethers.Contract(
//           0xce5a385b0a39Cf2F9Ca4b5feAcE292158c40bC85,
//           abi, 
//           signer
//         )
//         // const campaign = await Campaign.attach("0xce5a385b0a39Cf2F9Ca4b5feAcE292158c40bC85")
        

//         const tx = await Campaign.connect(signer).start(
//             goal,
//             endsAt  
//         );
//         await tx.wait()

//         console.log("Success! Campaign created")
//     });
