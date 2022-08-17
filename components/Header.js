import React from 'react'
import Image from 'next/image'
import Logo from '../turtle.png'
import {FaSearch} from 'react-icons/fa'
import { ConnectButton} from 'web3uikit'

const styles = {
  header: 'bg-lime-600 text-white h-23 flex gap-[100px] w-full p-[30px]',
  Headmenu: 'flex justify-center h-full max-w-screen-xl mx-auto px-40 pt-6',
  Logo: 'flex gap-[20px]',
  name: 'jusitfy-center items-center text-4xl pl-20px w-10 pt-2 font-serif',
  menu: 'flex justify-center items-center gap-[20px]',
  menuItem: 'relative mr-1 cursor-point hover:opacity-60',
  badges: `rounded-full bg-blue-700 h-2 w-2 absolute bottom-5 right-0 top-1 ring-4`,
  inputcontainer: 'flex justify-center items-center p-1 rounded-lg bg-[#d4d4d8]',
  input: 'bg-transparent outline-none text-white w-70 ml-3'
}

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.Logo}>
        <Image 
          src={Logo}
          alt='Logo'
          height={50}
          width={50}
          class = 'cursor-point'
        />
        <div className={styles.name}>
          EXE Dbank
        </div>
      </div>
      <div className={styles.Headmenu}>
        <nav className={styles.menu}>
          <div className={styles.menuItem}>
              <div className={styles.menuLink}>About us</div>
          </div>
          <div className={styles.menuItem}>
              <div className={styles.menuLink}>Deposit</div>
              <div className={styles.badges} />
          </div>
          <div className={styles.menuItem}>
              <div className={styles.menuLink}>Withdraw</div>
          </div>
          <div className={styles.menuItem}>
              <div className={styles.menuLink}>Exchanges</div>
              <div className={styles.badges}/>
          </div>
          <div className={styles.menuItem}>
              <div className={styles.menuLink}>Cryptocurrency</div>
              <div className={styles.badges}/>
          </div>
        </nav>
        <div className='flex items-center justify-items-end'>
            <div className={styles.inputcontainer}>
              <FaSearch/>
              <input 
              className={styles.input} 
              placeholder = "Search..."
              />
            </div>
            < ConnectButton/>
        </div>
      </div>
    </div>
  )
}

export default Header