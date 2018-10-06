module.exports = {
    output: { 
        filename: 'vendors-pkg.js' 
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                'style-loader', 
                'css-loader', 
                'sass-loader' 
            ]
        }]
    }
}
