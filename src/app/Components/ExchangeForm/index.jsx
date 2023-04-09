import { Button } from "antd";
import styles from "./styles.module.scss";
import SwapIcon from "../SwapIcon";
import CurrencyDropdown from "../CurrencyDropdown";
import FieldNumber from "../FieldNumber";
import { useCallback, useEffect, useMemo, useState } from "react";
import { resetResult } from "../../../redux/Exchange/exchangeSlice";
import { useDispatch } from "react-redux";
import { mappedCurrencies, updatedItems } from "../../../helpers";
import { fetchExchangeResult } from "../../../redux/Exchange/exchangeActions";

const ExchangeForm = ({ currencies }) => {

  const dispatch = useDispatch();

  // Update returned currencies array to be an array of objects:
  const loadedCurrencies = mappedCurrencies(currencies);

  // Set all fields value states:
  const [amount, setAmount] = useState("1.0");
  const [from, setFrom] = useState("Currency");
  const [to, setTo] = useState("Currency");

  // Check if all fields are filled:
  const valuesFilled = (amount !== '0.0') && (amount.trim().length !== 0) && (from !== 'Currency') && (to !== 'Currency');

  // Call exchange api if all fields are filled and if from or to values change:
  useEffect(() => {

    if (valuesFilled) {
      dispatch(fetchExchangeResult({ params: { to, from, q: amount } }))
    }

  }, [from, to])

  // Call exchange api if amount value changes if user stops writting for 2seconds:
  useEffect(() => {

    dispatch(resetResult());

    const set = setTimeout(() => {

      if (valuesFilled) {

        dispatch(fetchExchangeResult({ params: { to, from, q: amount } }))

      }
    }, 2000);

    return () => {
      clearTimeout(set)
    }

  }, [amount]);

  const resetHandler = () => {
    setAmount("1.0");
    setFrom("Currency");
    setTo("Currency");
    dispatch(resetResult());
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
          onAmountChange={useCallback((val) => setAmount(val), [])} // use memoize hook to prevent this function from recreation for this memoized component.
        />

        <CurrencyDropdown
          data-testid='from'
          items={useMemo(() => updatedItems(loadedCurrencies, to), [to])}
          value={from}
          onChange={useCallback((val) => setFrom(val), [])}
        />

        <SwapIcon onClick={swapHandler} />

        <CurrencyDropdown
          items={useMemo(() => updatedItems(loadedCurrencies, from), [from])}
          value={to}
          onChange={useCallback((val) => setTo(val), [])}
        />

      </div>

      {valuesFilled && <Button type='primary' className={styles.btn} onClick={resetHandler}>Reset</Button>}
    </div>

  )

};

export default ExchangeForm;
