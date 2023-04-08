
import { Inter } from 'next/font/google';
import styles from './page.module.scss';
import ExchangeCurrency from './Components/ExchangeCurrency';
import { use } from 'react';
import { getData } from './utils/getData';

const inter = Inter({ subsets: ['latin']})

// async function getData() {
//   const res = await fetch('https://currency-exchange.p.rapidapi.com/listquotes', {
//     cache:'no-store',
//     headers: {
// 			'X-RapidAPI-Key': process.env.API_KEY,
// 			'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com',
// 		},
//   });

//   if (!res.ok) {
//       throw new Error('Failed to fetch data');
//   }

//   return res.json();
// }

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
