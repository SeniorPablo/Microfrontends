const { merge } = require('webpack-merge')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common')
const packageJson = require('../package.json')
// const domain = process.env.PRODUCTION_DOMAIN
const domain = 'https://desarrollo_01.sistemasentry.com.co'

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'host',
            remotes: {
                marketing: `marketing@${domain}/Microfrontends/marketing/remoteEntry.js`,
                auth: `auth@${domain}/Microfrontends/authentication/remoteEntry.js`,
                dashboard: `dashboard@${domain}/Microfrontends/dashboard/remoteEntry.js`
            },
            shared: packageJson.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)
