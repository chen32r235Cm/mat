module.exports = {
    devServer: {
        proxy: {
            "/ec": {
                "target": "https://mallcdn.api.epet.com",
                "changeOrigin": true,
                "pathRewrite": {
                    "^/ec": "/"
                }
            },
            "/ea": {
                "target": "https://mall.api.epet.com",
                "changeOrigin": true,
                "pathRewrite": {
                    "^/ea": "/"
                }
            }
        }
    },
   
} 