'use client'

import { Alert, Card } from 'antd';
import ExchangeForm from '../ExchangeForm';
import Result from '../Result';
import styles from './styles.module.scss';
import useExchange from '@/app/hooks/useExchange';
import { useCallback, useEffect, useState } from 'react';


export default function ExchangeCurrency({ currencies }) {

    const [result, setResult] = useState('');
    const [allValues, setData] = useState();
    const { loading, error, getResult } = useExchange();

    const changeResultHandler = (data) => {
        setResult(data)
    }

    const eliminateResultHandler = () => {
        setResult(null)
    }

    const resultChangeHandler = (value) => {
        setResult(value);
    }

    useEffect(() => {
        if (allValues) {
            getResult({ params: allValues, callBack: changeResultHandler })
        }
    }, [allValues])

    return (

        <Card className={styles.card}>

            <ExchangeForm currencies={currencies} onChangeValues={(val) => setData(val)} resetResult={eliminateResultHandler} onResultChange={resultChangeHandler} />

            {result && <Result result={result} loading={loading} />}

            {error && <Alert message={error} type="error" />}

        </Card>
    )

};