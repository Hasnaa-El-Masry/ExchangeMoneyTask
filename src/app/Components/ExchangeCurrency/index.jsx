'use client'

import { Alert, Card } from 'antd';
import ExchangeForm from '../ExchangeForm/index.jsx';
import Result from '../Result';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';


export default function ExchangeCurrency({ currencies }) {

    const store = useSelector(state => state.exchange);

    return (

        <Card className={styles.card}>

            <ExchangeForm currencies={currencies} />

            <Result result={store?.result} loading={store?.loading}/>

            {store?.error && <Alert message={store?.error} type="error"/>}

        </Card>
    )

};