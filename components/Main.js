import React, {Component} from 'react'
import saving from '../profits.png'
import Image from 'next/image'

const styles = {
    Container: 'justify-evenly w-full h-[500px] bg-red-900 flex items-center ',
    Text: 'text-white text-6xl'
}

class Main extends Component {
    
    render() {
    return (
    <div className={styles.Container}>
        <div>
            <Image
            src={saving}
            width = {200}
            height = {200}
            />
        </div>
        <div>
            <div className={styles.Text}>
                Everydays essentials
                <p>
                    Send, spend and save smarter
                </p>
            </div>
            <div className='pt-5 text-white'>
                 Make day-to-day spending a breeze with all things money in one place
            </div>
        </div>
    </div>
  )
}
}

export default Main