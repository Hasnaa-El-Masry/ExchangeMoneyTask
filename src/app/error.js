'use client';
import { Button } from 'antd';
import styles from './error.module.scss';

export default function GlobalError({
  error,
  reset,
}) {

  return (
    <html>
      <body>
        <div className={styles.error_container}>
          
          <h2>Something went wrong!</h2>
          <Button onClick={() => reset()}>Try again</Button>
        </div>
      </body>
    </html>
  );
}