// import postcss from "rollup-plugin-postcss";
import withSolid from "rollup-preset-solid";

export default withSolid([
  {
    input: "src/index.ts",
    targets: ['esm', 'cjs'],
    // writePackageJson: true,
    // plugins: [
    // postcss({
    //   config: {
    //     path: "./postcss.config.cjs",
    //   },
    //   extensions: [ ".css" ],
    //   minimize: true,
    //   inject: {
    //     insertAt: "top",
    //   },
    // }),
    // ],
  },
]);
