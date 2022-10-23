const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("LowkickStarter", function () {
  async function deploy() {
    const [ owner, pledger ] = await ethers.getSigners()

    const Factory = await ethers.getContractFactory("LowkickStarter")
    const lowkick = await Factory.deploy()
    await lowkick.deployed()

    return { owner, pledger, lowkick }
  }

  it("allows to pledge and claim", async () => {
    const { owner, pledger, lowkick } = await loadFixture(deploy)

    const endsAt = Math.floor(Date.now() / 1000) + 30

    const startTx = lowkick.start(1000, endsAt)
    // await startTx.wait()

    const campaignAddr = (await lowkick.campaigns(1)).targetContract
    const campaignAsOwner = campaignAddr.connect(owner)

    await expect(campaignAsOwner.endsAt()).to.eq(endsAt)

    const campaignAsPledger = campaignAddr.connect(pledger)
    const pledgeTx = await campaignAsPledger.pledge({ value: 1500 })
    await pledgeTx.wait()

    await expect(campaignAsOwner.claim()).to.be.reverted
    expect ((await lowkick.campaigns(1)).claimed).to.be.false

    await time.increase(40)

    await expect(() => campaignAsOwner.claim()).to.changeEtherBalances([campaignAsOwner, owner], [-1500, 1500])

    expect ((await lowkick.campaigns(1)).claimed).to.be.true
  
  })
})
