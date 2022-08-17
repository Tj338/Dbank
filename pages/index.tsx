import type { NextPage } from 'next'
import Header from '../components/Header'
import Card from '../components/Card'
import { Component } from 'react'
import Main from '../components/Main'
import Endcreadit from '../components/Endcredit'

class Home extends Component {
  
  render(){
  //bg-gradient-to-r bg-black
  return (
    <div className='min-h-screen bg-blck'>
      <Header/>
      <div>
        <Card/>
      </div>
      <div/>
        <Main/>
      <div />
        <Endcreadit/>
    </div>
  )
}
}

export default Home
