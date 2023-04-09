'use client'

import { Alert, Card } from 'antd';
import ExchangeForm from '../ExchangeForm';
import Result from '../Result';
import styles from './styles.module.scss';
import { useSelector } from 'react-redux';


export default function ExchangeCurrency({ currencies }) {

    const { result, loading, error } = useSelector(state => state.exchange);

    return (

        <Card className={styles.card}>

            <ExchangeForm currencies={currencies} />

            <Result result={result} loading={loading}/>

            {error && <Alert message={error} type="error" />}

        </Card>
    )

};