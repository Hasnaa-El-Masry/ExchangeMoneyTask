import { Spin } from "antd";

export default function Result({ result = 'Amount from equals to..', loading }) {
    return (
        <div className={'mt-1'}>
            {loading ? <Spin /> : result}
        </div>
    )

}