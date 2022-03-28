import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, DatePicker } from 'antd';
import styles from './styles.module.css';

ReactDOM.render(
  <div className={styles.App}>
    <h1 className={styles.h1}>Hello, world!</h1>
    <DatePicker />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>
  </div>,
  document.getElementById("root")
);
