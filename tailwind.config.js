module.exports = {
    theme: {
        colors: {
            transparent: "transparent",
            current: "currentColor",
            "main-green": "#00a046",
        },
    },
    content: [
        "./app/views/**/*.html.erb",
        "./app/helpers/**/*.rb",
        "./app/assets/stylesheets/**/*.css",
        "./app/javascript/**/*.js",
        "./node_modules/flowbite/**/*.js",
    ],
    plugins: [require("flowbite/plugin")],
    darkMode: "media",
};
