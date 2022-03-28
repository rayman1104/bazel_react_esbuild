import { default as cssModulesPlugin } from "esbuild-plugin-css-modules";
import { default as esbuildPluginImport } from "./esbuild-plugin-import.mjs";

export default {
    plugins: [
        cssModulesPlugin({
            localIdentName: "[local]--[hash:8:md5:hex]",
        }),
        esbuildPluginImport([{ libraryName: 'antd', style: 'css' }]),
    ],
}
