import {rollup} from "rollup";
import util from "util";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

// 常用 inputOptions 配置
const inputOptions = {
  input: "./src/index.js",
  external: [],
  plugins: [],
};

const outputOptionsList = [
  // 常用 outputOptions 配置
  {
    dir: "dist/es",
    // 入口模块的输出文件名
    entryFileNames: `[name].[hash].js`,
    // 非入口模块(如动态 import)的输出文件名
    chunkFileNames: "chunk-[hash].js",
    // 静态资源文件输出文件名
    assetFileNames: "assets/[name]-[hash][extname]",
    format: "es",
    sourcemap: true,
    // 如果是打包出 iife/umd 格式，需要对外暴露出一个全局变量，通过 name 配置变量名
    // name: 'MyBundle',
    globals: {
      lodash: "_",
    },
    plugins: [resolve(), commonjs()],
  },
  // 省略其它的输出配置
];

async function build() {
  let bundle;
  let buildFailed = false;
  try {
    // 1. 调用 rollup 生成 bundle 对象
    bundle = await rollup(inputOptions);
    console.log(util.inspect(bundle));
    for (const outputOptions of outputOptionsList) {
      // 2. 拿到 bundle 对象，根据每一份输出配置，调用 generate 和 write 方法分别生成和写入产物
      const { output } = await bundle.generate(outputOptions);
      await bundle.write(outputOptions);
    }
  } catch (error) {
    buildFailed = true;
    console.error(error);
  }
  if (bundle) {
    // 最后调用 bundle.close 方法结束打包
    await bundle.close();
  }
  process.exit(buildFailed ? 1 : 0);
}

build();
