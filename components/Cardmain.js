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
    card: 'flex p-1 rounded-lg bg-white border-black h-[200px] w-[400px] bg-gradient-to-r from-cyan-500 to-blue-500 flex '
}

class Card extends Component {
    

render(){
  return (
    <div className={styles.container}>
        <div className={styles.Welcome}>
            <div className={styles.Header}>
                Welcome Back
                <p>
                    One App, All thing money 
                </p>
            </div>
            <div className='text-blue-600 mt-10 text-2xl font-bold underline underline-offset-4'>
            <Link href={'/'}>
                Go back to Main page
            </Link>
            </div>
        </div>
        <div className={styles.card}>
            <div className='flex-1 font-serif flex-row'>
            <Image
                src={logo}
                alt = 'logo'
                height={100}
                width={100}
            />
            EXE Dbank
            </div>
            <div className='text-center flex text-sm items-center font-normal'>
                Cards: {this.props.account}
            </div>
        </div>
    </div>
  )
}
}

export default Card