import React, {useState} from 'react'
import {Component} from 'react'
import Link from 'next/link'
import Web3 from 'web3'

const styles ={
    container: 'flex w-full h-[600px] bg-orange-100 flex justify-evenly',
    table: 'justify-center flex items-center flex-col',
    left:  'justify-center items-center flex flex-col space-y-4 ',
    button: 'rounded-3xl bg-orange-800  mt-50 h-[100px] w-[250px] border-xl text-white transition-all duration-300 hover:scale-105 hover:shadow-xl overflow-hidden font-semibold'
}
 

class transaction extends Component  {

    constructor(props) {
        super(props)
            this.state ={
                amount: 0
            }
    }

    render(){
        console.log(web3.utils.fromWei(this.props.tetherBalance))
        return (
            <div className={styles.container}>
                <div className= {styles.left} >
                    <div className='items-top flex text-2xl mt-10 font-semibold'>
                         Account Number: 
                        <p>
                            {this.props.account}
                        </p>
                    </div>
                    <div>
                        Deposit
                        <form onSubmit={(event) => {
                            event.preventDefault()
                            let amount
                            amount = this.input.value.toString()
                            amount = window.web3.utils.toWei(amount, 'Ether')
                            this.props.stakeToken(amount)
                        }}>
                            <input
                                ref={(input) => {this.input = input}}
                                className='mr-10 h-[100px] w-[400px] rounded-3xl text-center'
                                placeholder='Amount to Deposit...'
                                type= 'text'
                                required
                            />
                            <button className={styles.button} type = 'submit'>
                            Deposit
                            </button>
                        </form>
                    </div>
                    <div>
                        WithDraw
                        <form onSubmit={(event) => {
                            event.preventDefault()
                            let amounts
                            amounts = this.inputs.value.toString()
                            amounts = window.web3.utils.toWei(amounts, 'Ether')
                            this.props.unstakeToken(amounts)
                        }}>
                         <input
                            ref={(inputs) => {this.inputs = inputs}}
                            className='mr-10 h-[100px] w-[400px] rounded-3xl text-center'
                            placeholder='Amount to WithDraw...'
                            type= 'text'
                            required
                            />
                            <button className={styles.button} type = 'submit'>
                             Withdraw
                            </button>
                        </form>
                    </div>
                    <div>
                        Take Loan
                        <form onSubmit={(event) => {
                            event.preventDefault()
                            let amountss
                            amountss = this.inputss.value.toString()
                            amountss = window.web3.utils.toWei(amountss, 'Ether')
                            this.props.debtToken(amountss)
                        }}>
                         <input
                            ref={(inputss) => {this.inputss = inputss}}
                            className='mr-10 h-[100px] w-[400px] rounded-3xl text-center'
                            placeholder='How much do you need'
                            type= 'text'
                            required
                            />
                            <button className={styles.button} type = 'submit'>
                             Loan
                            </button>
                        </form>
                    </div>
                    
                </div>
                <div className={styles.table}>
                    <div className='text-3xl tracking-wide'>
                        Balance In Wallet: 
                        <a className='text-4xl ml-5 font-bold'>
                            {web3.utils.fromWei(this.props.tetherBalance)}
                        </a>
                    
                    </div>
                <div class="container px-4 mx-auto my-8 w-[500px]">
                    <div class="table w-full bg-white rounded shadow table-responsive text-center border-collapse border border-slate-400">
                        <div class="table-header-group bg-gray-50">
                            <div class="border-b border-gray-900 table-row">
                            <div class="table-cell p-3 text-sm font-bold uppercase">Stake Tokens</div>
                            <div class="table-cell p-3 text-sm font-bold uppercase">Reward Tokens</div>
                        </div>
                     </div>
                    <div class="table-row-group divide-y divide-gray-700">
                         <div class="table-row border-t border-gray-400 group hover:bg-gray-100">
                            <div class="table-cell p-3">{web3.utils.fromWei(this.props.stakingBalance)}</div>
                         <div class="table-cell p-3">{web3.utils.fromWei(this.props.rewardBalance)}</div>
                    </div>
                     <div class="table-row border-t border-gray-400 group hover:bg-gray-100">
                        <div class="table-cell p-3">BOS</div>
                        <div class="table-cell p-3">RWD</div>
                    </div>
                </div>
                </div>
            </div>
            
            <div class="container px-4 mx-auto my-8 w-[500px]">
                    <div class="table w-full bg-white rounded shadow table-responsive text-center border-collapse border border-slate-400">
                        <div class="table-header-group bg-gray-50">
                            <div class="border-b border-gray-900 table-row">
                            <div class="table-cell p-3 text-sm font-bold uppercase">Amount of Debt </div>
                            <div class="table-cell p-3 text-sm font-bold uppercase">divident to pay</div>
                        </div>
                     </div>
                    <div class="table-row-group divide-y divide-gray-700">
                         <div class="table-row border-t border-gray-400 group hover:bg-gray-100">
                            <div class="table-cell p-3">{web3.utils.fromWei(this.props.debtBalance)}</div>
                         <div class="table-cell p-3">{web3.utils.fromWei(this.props.debt_divident)}</div>
                    </div>
                     <div class="table-row border-t border-gray-400 group hover:bg-gray-100">
                        <div class="table-cell p-3">BOS</div>
                        <div class="table-cell p-3">PAY</div>
                    </div>
                </div>
                </div>
            </div>
          </div>
          </div>
    )
}
}

export default transaction