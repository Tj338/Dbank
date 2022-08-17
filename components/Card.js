import React from 'react'
import { Component } from 'react'
import Image from 'next/image'
import logo from '../turtle.png'
import Link from 'next/link'

//bg-gradient-to-t from-[#0d141c] to-[#42667e]
const styles = {
    container: 'justify-evenly w-full h-[500px] flex items-center bg-black',
    Welcome: 'text-white',
    Header: 'text-6xl text-white',
    card: 'flex p-1 rounded-lg bg-white border-black h-[200px] w-[400px] bg-gradient-to-r from-cyan-500 to-blue-500 flex justify-center items-center text-4xl font-bold text-white'
}

class Card extends Component {
    

render(){
  return (
    <div className={styles.container}>
        <div className={styles.Welcome}>
            <div className={styles.Header}>
                Welcome Everyone
                <p>
                    One App, All thing money 
                </p>
            </div>
            <p className='pt-5'>
            From easy money management, to travel perks and investments. Open your account in a flash
            </p>
        </div>
        <div className={styles.card}>
        <Link href={'/about'} className= 'text-2xl'>
            Click Here to Start >>
        </Link>
        </div>
        {/* <div className={styles.card}>
            <div className='flex-1 font-serif flex-row'>
            <Image
                src={logo}
                alt = 'logo'
            />
            NONAME
            </div>
            <div className='text-center flex text-sm items-center font-normal'>
                Cards: {this.props.account}
            </div>
        </div> */}
    </div>
  )
}
}

export default Card