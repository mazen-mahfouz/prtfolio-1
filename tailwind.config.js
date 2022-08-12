/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./index.html'],
    theme: {
        extend: {
            colors: {
                "main-color": "var(--main-color)",
            },
            backgroundImage: {
                'img_header': "url('/img/background.jpg')",
            },
        },
    },
    plugins: [],
}