const { expect } = require("chai")

const tokens = (n) => {
  return ethers.utils.parseUnits(n.toString(), 'ether')
}

describe("Dappazon", () => {
  let dappazon
  let deployer, buyer

  beforeEach(async () => {
    // Set up accounts
    [deployer, buyer]= await ethers.getSigners()

    // Deploy the contract
      const Dappazon = await ethers.getContractFactory('Dappazon')
      dappazon = await Dappazon.deploy()
  })

  describe('Deployment', async () => {
    it('Sets the owner', async () => {
      expect(await dappazon.owner()).to.be.equal(deployer.address)
    })

    it('has a name', async() => {    
      const name = await dappazon.name()
      expect(name).to.equal("Dappazon")
    })
  })
})
