// // tailwind.config.ts
// import { Config } from "tailwindcss";
// import defaultTheme from "tailwindcss/defaultTheme";
//
// export default <Partial<Config>>{
//   content: [
//     "./components/**/*.{js,vue,ts}",
//     "./layouts/**/*.vue",
//     "./pages/**/*.vue",
//     "./plugins/**/*.{js,ts}",
//     "./nuxt.config.{js,ts}",
//     "./node_modules/flowbite.{js,ts}",
//   ],
//   theme: {
//     extend: {
//       fontFamily: {
//         sans: [...defaultTheme.fontFamily.sans],
//         inter: ["Inter", "sans-serif"],
//       },
//     },
//   },
//   plugins: [require("flowbite")],
//   // require("@tailwindcss/forms"),
// };
import defaultTheme from "tailwindcss/defaultTheme";
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./node_modules/flowbite.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite")],
};
