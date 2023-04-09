import styles from './styles.module.scss';
import {SwapOutlined} from '@ant-design/icons';

export default function SwapIcon({onClick}) {

    return (
        <span className={styles.swapIcon} onClick={onClick}>

            <SwapOutlined className={styles.icon}/>

        </span>
    )

}