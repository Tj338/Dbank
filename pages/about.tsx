import type { NextPage } from 'next'
import Header from '../components/Header'
import Card from '../components/Card'
import Web3 from 'web3'
import { Component } from 'react'
import Finalcontext from '../context/finalcontext'


class About extends Component {
  
  render(){
  //bg-gradient-to-r bg-black
  return (
    <div>
        <Header/>
        <div>
          <Finalcontext/>
        </div>
    </div>
  )
}
}

export default About
