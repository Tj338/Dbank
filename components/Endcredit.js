import React from 'react'
import Man from '../kid.png'
import Image from 'next/image'

const styles ={
    container: 'justify-evenly w-full h-[500px] flex items-center bg-blue-700',
    text: 'text-xl text-white mt-10 ml-10 flex-col'
}

const Endcredit = () => {
  return (
    <div className={styles.container}>
        <div className={styles.text}>
            Support by
            <div className='text-2xl'>
                Nawapat Supaamornpan
            </div>
        </div>
        <div className='items-center flex'>
        <Image 
            src={Man}
            height={200}
            width={200}
        />
        </div>
    </div>
  )
}

export default Endcredit