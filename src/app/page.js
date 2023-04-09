
import { Inter } from 'next/font/google';
import styles from './page.module.scss';
import ExchangeCurrency from './Components/ExchangeCurrency';
import { use } from 'react';
import { getData } from '@/utils/server_only';

const inter = Inter({ subsets: ['latin']})


export default function Home() {
  const data = use(getData())

  return (
    <main className={`${inter.className} ${styles.main}`}>


      <div className={styles.container}>

        <h1 className='text-center'>Money Exchange</h1>

        <ExchangeCurrency currencies={data}/>

      </div>

    </main>
  )
}
