import {terser} from "rollup-plugin-terser";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

/**
 * @type { import('rollup').RollupOptions }
 */
export default {
  input: ["src/index.js"],
  output: [
    {
      dir: "dist/es",
      format: "esm",
      // 只有使用 Output 阶段相关钩子的插件才能够放到这个配置中
      // 详见 https://github.com/rollup/awesome#output
      // 加入 terser 插件，用来压缩代码
      plugins: [terser()],
    },
    {
      dir: "dist/cjs",
      format: "cjs",
    },
  ],
  // 通过 plugins 参数添加插件
  plugins: [resolve(), commonjs()],
};
