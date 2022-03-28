import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button, DatePicker } from 'antd';

import 'antd/dist/antd.css';
import './styles.css';

ReactDOM.render(
  <div className="App">
    <h1 className="h1">Hello, world!</h1>
    {/*<h1 className={styles.h1}>Hello, world!</h1>, // doesn't work*/}
    <DatePicker />
    <Button type="primary" style={{ marginLeft: 8 }}>
      Primary Button
    </Button>
  </div>,
  document.getElementById("root")
);
