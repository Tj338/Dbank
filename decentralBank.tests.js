const { assert } = require('chai')

const Tether = artifacts.require("Tether")
const RWD = artifacts.require("RWD")
const DecentralBank = artifacts.require("DecentralBank")

require('chai')
.use(require('chai-as-promised'))
.should()

contract ('DecentralBank', ([owner, customer]) => {
    let tether, rwd, decentralBank

    function tokens(number) {
        return web3.utils.toWei (number,'ether')
        
    }

    before(async() => {
        // Load Contracts
        tether = await Tether.new()
        rwd = await RWD.new()
        decentralBank = await DecentralBank.new(rwd.address, tether.address)

        // transfer all tokens to DencentralBank(1 million)
        await rwd.transfer(decentralBank.address, tokens('1000000'))

        // transfer 100 mock Tethers to customer
        await tether.transfer(customer, tokens('100'),{from: owner})
    })

    //Al of the code goes here for testing
    describe('Mock Tether Deployment', async () =>{
        it ('matches name successfully', async () => {
            let tether = await Tether.new()
            const name = await tether.name()
            assert.equal(name, 'Mock Tether Token')
        })
    })

    describe('Reward Token', async () =>{
        it ('matches name successfully', async () => {
            let reward = await RWD.new()
            const name = await reward.name()
            assert.equal(name, 'Reward Token')
        })
    })

    describe('Dencentral Bank Deployment', async () =>{
        it ('matches name successfully', async () => {
            const name = await decentralBank.name()
            assert.equal(name, 'Decentral Bank')
        })

        it('caontact has tokens', async() =>{
            balance = await rwd.balanceOf(decentralBank.address)
            assert.equal(balance, tokens('1000000'))
        })
    describe ('Yield Farming', async() => {
        it ('rewards tokens for staking' , async() => {
            let result 
            //check Investor Balance
            result = await tether.balanceOf(customer)
            assert.equal(result.toString(), tokens('100'),'customer mock wallet balance before staking')
            // Check Staking For Customer of 100 tokens
            await tether.approve(decentralBank.address, tokens('100'), {from:customer})
            await decentralBank.depositTokens(tokens('100'),{from: customer})
            // check Updated Balance of customer
            result = await tether.balanceOf(customer)
            assert.equal(result.toString(), tokens('0'),'customer mock wallet balance after staking 100 tokens')
            // check Updated Balance of Decentral Bank
            result = await tether.balanceOf(decentralBank.address)
            assert.equal(result.toString(), tokens('100'),'decental bank mock wallet balance after staking from customer')

            // Is staking Update
            result = await decentralBank.isStaked(customer)
            assert.equal(result.toString(), 'true','customer is staking status after staking')
        
            //Issue Tokens
            await decentralBank.issueTokens({from:owner})

            //Ensure Only the Owner can issue tokens
            await decentralBank.issueTokens({from:customer}).should.be.rejected;

            //Unstake Tokens
            await decentralBank.unstakeTokens({from: customer})

            // check Unsatking Balances
            result = await tether.balanceOf(customer)
            assert.equal(result.toString(), tokens('100'),'customer mock wallet balance after unstaking 100 tokens')
            
            // Check update Balance of Decentral bank
            result = await tether.balanceOf(decentralBank.address)
            assert.equal(result.toString(), tokens('0'),'decental bank mock wallet balance after unstaking from customer')
            
            //Is Staking Update
            result = await decentralBank.isStaked(customer)
            assert.equal(result.toString(), 'false','customer is no longer staking after unstaking')
        })
    })
    })

})