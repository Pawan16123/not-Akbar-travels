const path = require("path");
const postCSSPlugins = [
    require("postcss-import"),
    require("postcss-mixins"),
    require("postcss-simple-vars"),
    // require("postcss-syntax"),
    require("postcss-nested"),
    require("autoprefixer"),
]
module.exports = {
    entry:"./app/assets/scripts/App.js",
    output: {
        filename: "bundeled.js",
        path: path.resolve(__dirname,"app"),
    },
    devServer: {
        before: function(app,server){
            server._watch("./app/**/*.html")
        },
        contentBase: path.join(__dirname,"app"),
        hot: true,  //allow webpack new css or js after saving i.e on the fly hot module replacementort files order didn't worked for me.
        port: 3000, //default value 8080
        host: "0.0.0.0"

    },
    mode:"development",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader","css-loader?url=false",{loader: "postcss-loader", options:{plugins:postCSSPlugins}}],
            }
        ]
    }
}