This PoC shows how to use Esbuild to build and serve a React app with Bazel.

Bazel takes care of things like Sass and TypeScript compilation before calling esbuild.

CSS Modules don't work as expected right now. See issue https://github.com/evanw/esbuild/issues/20.

Works:
```tsx
import "./styles.css";
ReactDOM.render(
  <h1 className="h1">Hello, world!</h1>,
  document.getElementById("root")
);
```

Doesn't work:
```tsx
import * as styles from "./styles.css";
ReactDOM.render(
  <h1 className={styles.h1}>Hello, world!</h1>,
  document.getElementById("root")
);
```
