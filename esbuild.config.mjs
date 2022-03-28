import { default as cssModulesPlugin } from "esbuild-css-modules-plugin";
import { default as esbuildPluginImport } from "./esbuild-plugin-import.mjs";

export default {
    plugins: [
        cssModulesPlugin({
            // optional. set to false to not inject generated CSS into <head>, default is true.
            // could be a function with params content & digest (return a string of js code to inject to page),
            // e.g.
            // ```
            // inject: (cssContent, digest) => `console.log("${cssContent}", "${digest}")`
            // ```
            inject: true,

            localsConvention: 'camelCaseOnly', // optional. value could be one of 'camelCaseOnly', 'camelCase', 'dashes', 'dashesOnly', default is 'camelCaseOnly'
            v2: true,
        }),
        esbuildPluginImport([{ libraryName: 'antd' }]),
    ],
}
