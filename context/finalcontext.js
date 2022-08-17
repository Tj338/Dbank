import React, { Component } from 'react'
import Tether from '../build/contracts/Tether.json'
import Reward from '../build/contracts/Reward.json'
import DecentralBank from '../build/contracts/Decentral_bank.json'
import Web3 from 'web3'
import Card from '../components/Cardmain'
import Transaction from '../components/transaction'

class finalcontext extends Component {
    
    async UNSAFE_componentWillMount(){
        console.log(this.state.isloading)
        await this.loadWeb3()
        await this.loadblockchaindata()
        console.log(this.state.account)
    }

    async loadWeb3() {
        if(window.ethereuem){
            window.web3 = new Web3(window.ethereuem)
            await window.ethereuem.enable()
        }else if (window.web3){
            window.web3 = new Web3(window.web3.currentProvider)
        }else {
            window.alert('fuck yourself')
        }
    }

    async loadblockchaindata() {
        const web3 = await window.web3
        const accounts = await web3.eth.getAccounts()
        this.setState({account: accounts[0]})
        const networkId = await web3.eth.net.getId()
        console.log(networkId, 'Network Id')

        //loading the tether
        const tetherData = Tether.networks[networkId]
        if(tetherData){
            const tether = new web3.eth.Contract(Tether.abi, tetherData.address)
            this.setState({tether})
            let tetherBalance = await tether.methods.balanceOf(this.state.account).call()
            this.setState({tetherBalance: tetherBalance.toString()})
            console.log({balance: tetherBalance})
        } else {
            window.alert('Cannot access to boss blockchain')
        }

        //loading the reward
        const rewarddata = Reward.networks[networkId]
        if(rewarddata){
            const reward = new web3.eth.Contract(Reward.abi, rewarddata.address)
            this.setState({reward})
            const rewardBalance = await reward.methods.balanceOf(this.state.account).call()
            this.setState({rewardBalance})
            console.log('Reward', this.state.rewardBalance)
        }else{
            window.alert('Cannot accress to reward')
        }

        // loading the decentralbank
        const DecentralBankData = DecentralBank.networks[networkId]
        if(DecentralBankData){
            const decentralbank = new web3.eth.Contract(DecentralBank.abi, DecentralBankData.address)
            this.setState({decentralbank})
            let stakingBalance = await decentralbank.methods.stakingBalance(this.state.account).call()
            this.setState({stakingBalance})
            let debtBalance = await decentralbank.methods.debt(this.state.account).call()
            this.setState({debtBalance})
            let debt_divident = await decentralbank.methods.debt_divident(this.state.account).call()
            this.setState({debt_divident})
            console.log('stakingbalance', this.state.stakingBalance)
        }

        this.setState({isloading: false})
    }

    stakeToken = (amount) => {
        this.setState({isloading: true})
        this.state.tether.methods.approval(this.state.decentralbank._address, amount).send({from: this.state.account}).on('transactionHash',(hash) =>{
            this.state.decentralbank.methods.Deposit(amount).send({from: this.state.account}).on('transactionHash',(hash) => {
                this.setState({isloading: false})
            })
        })
    }

    unstakeToken = (amount) => {
        this.setState({isloading: true})
        this.state.decentralbank.methods.unstakeToken(amount).send({from: this.state.account}).on('transactionHash',(hash) => {
            this.setState({isloading: false})
        })
    }

    debtToken = (amount) => {
        this.setState({isloading: true})
        this.state.tether.methods.approval_debt(this.state.account, amount).send({from: this.state.account}).on('transactionHash',(hash) =>{
            this.state.decentralbank.methods.apply_debt(amount).send({from: this.state.account}).on('transactionHash',(hash) => {
                this.setState({isloading: false})
            })
        })
    }

    constructor(props) {
        super(props)
            this.state = {
                account:'0001',
                tether: {},
                reward: {},
                decentralbank: {},
                tetherBalance: '0',
                rewardBalance: '0',
                stakingBalance: '0',
                debtBalance: '0',
                debt_divident: '0',
                isloading: true
            }
    }

    render (){
        let load 
        { this.state.isloading ? load = 
            <p className='text-2xl justify-center items-center flex'>is Loading....</p>
            : load = 
            <div> 
                <Card account = {this.state.account}/>
                <div>
                    <Transaction 
                        account = {this.state.account} 
                        tetherBalance = {this.state.tetherBalance}
                        rewardBalance = {this.state.rewardBalance}
                        stakingBalance = {this.state.stakingBalance}
                        stakeToken = {this.stakeToken}
                        unstakeToken = {this.unstakeToken}
                        debtToken = {this.debtToken}
                        debtBalance = {this.state.debtBalance}
                        debt_divident = {this.state.debt_divident}
                        />
                 </div>
        </div>
        }
        return (    
            <div> 
                {load}
            </div>
            
        )
}
}

export default finalcontext