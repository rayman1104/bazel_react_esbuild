import * as React from "react";
import * as ReactDOM from "react-dom";
import * as styles from "./styles.css";

ReactDOM.render(
  <h1 className="h1">Hello, world!</h1>, // works
  // <h1 className={styles.h1}>Hello, world!</h1>, // doesn't work
  document.getElementById("root")
);
