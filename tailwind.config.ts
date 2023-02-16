// tailwind.config.ts
import { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>> {
    content: [
        'components/**/*.{vue,js,ts}',
        'layouts/**/*.vue',
        'pages/**/*.vue',
        'composables/**/*.{js,ts}',
        'plugins/**/*.{js,ts}',
        'App.{js,ts,vue}',
        'app.{js,ts,vue}',
        'Error.{js,ts,vue}',
        'error.{js,ts,vue}',
        'content/**/*.md',
        'AuthPage.vue'
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: [...defaultTheme.fontFamily.sans],
                inter: ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}