import { Input } from "antd";
import { memo, useEffect } from "react";

export default memo(function FieldNumber({ label, placeholder, value, onAmountChange }) {

    const changeHandler = (e) => {

        // validate to accept only float numbers:
        if(e.target.value.match(/^([0-9]{1,})?(\.)?([0-9]{1,})?$/)){
            onAmountChange(e.target.value);
        }

    }

    return (

        <div className={`field_group`}>

            <label htmlFor="amount">{label}</label>
            <Input value={value} id="amount" placeholder={placeholder} 
                 onChange={changeHandler} />

        </div>

    )
});