## Description

This PoC shows how to use Esbuild to build and serve a React app with Bazel.

Bazel takes care of things like Sass and TypeScript compilation before calling esbuild.

CSS Modules don't work as expected right now. See issue https://github.com/evanw/esbuild/issues/20.

## How to run

```bash
$ bazel run //:server
```
