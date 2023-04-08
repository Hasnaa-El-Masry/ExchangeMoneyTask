import { Button } from "antd";
import styles from "./styles.module.scss";
import SwapIcon from "../SwapIcon";
import CurrencyDropdown from "../CurrencyDropdown";
import FieldNumber from "../FieldNumber";
import { useCallback, useEffect, useMemo, useState } from "react";

const updatedItems = (items, value) => items.map((item) => { return { ...item, disabled: value == item.value } });
const mappedCurrencies = (items) => items.map((item) => { return { lable: item.toLowerCase(), value: item } })

const ExchangeForm = ({ resetResult, currencies, onChangeValues }) => {

  const loadedCurrencies = mappedCurrencies(currencies);

  const [toItems, setToItems] = useState(loadedCurrencies);
  const [fromItems, setFromItems] = useState(loadedCurrencies);
  const [amount, setAmount] = useState("1.0");
  const [from, setFrom] = useState("Currency");
  const [to, setTo] = useState("Currency");

  const valuesFilled = (amount !== '0.0') && (amount.trim().length !== 0) && (from !== 'Currency') && (to !== 'Currency');

  // Call Api here based on some cases:
  useEffect(() => {

    if (valuesFilled) {
      onChangeValues({ to, from, q:amount })
    }

  }, [from, to])

  useEffect(() => {
    resetResult();
    const set = setTimeout(()=>{
        if(valuesFilled){
          onChangeValues({ to, from, q:amount })
        }
    },2000);

    return ()=>{
        clearTimeout(set)
    }
    
}, [amount]);

  // Updater dropdown menu items for from currencies:
  useEffect(() => {
    setToItems(updatedItems(loadedCurrencies, from))
  }, [from])

  //Update dropdown menu items from to currencies:
  useEffect(() => {
    setFromItems(updatedItems(loadedCurrencies, to))
  }, [to])

  const resetHandler = () => {
    setAmount("1.0");
    setFrom("Currency");
    setTo("Currency");
    resetResult();
  }

  const swapHandler = () => {
    setFrom(to);
    setTo(from);
  }

  return (

    <div className={styles.form_container}>

      <div className={styles.fields_container}>

        <FieldNumber
          label={'Amount'}
          placeholder='0.0'
          value={amount}
          onAmountChange={useCallback( (val) => setAmount(val) ,[])} // use memoize hook to prevent this function from recreation for this memoized component.
        />

        <CurrencyDropdown
          items={fromItems}
          value={from}
          onChange={(val) => {setFrom(val); resetResult()}}
        />

        <SwapIcon onClick={swapHandler} />

        <CurrencyDropdown
          items={toItems}
          value={to}
          onChange={(val) =>{ setTo(val); resetResult()}}
        />

      </div>

      {valuesFilled && <Button type='primary' className={styles.btn} onClick={resetHandler}>Reset</Button>}
    </div>

  )

};

export default ExchangeForm;
