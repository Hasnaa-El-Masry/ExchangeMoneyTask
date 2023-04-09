
import { Select } from 'antd';
import { memo } from 'react';

const CurrencyDropdown = ({ items, value, onChange }) => {

    return (

            <Select
                style={{ width: '100%' }}
                onChange={onChange}
                options={items}
                value={value}
            />

    )
};

export default memo(CurrencyDropdown);
