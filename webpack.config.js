const LicensePlugin = require('webpack-license-plugin')

module.exports = [{
    entry: './src/index.js',
    output: {
        library: "MeshCat",
        libraryTarget: 'umd'
    },
    watch: true,
    mode: "development",
    devtool: "eval-cheap-source-map"
}, {
    entry: './src/index.js',
    output: {
        filename: "main.min.js",
        library: "MeshCat",
        libraryTarget: 'umd'
    },
    watch: true,
    mode: "production",
    module: {
      rules: [
        {
          test: /\/libs\/(basis|draco)\//,
          type: 'asset/inline'
        }
      ]
    },
    plugins: [
      new LicensePlugin({
        outputFilename: "main.min.js.THIRD_PARTY_LICENSES.json",
        licenseOverrides: {
          'wwobjloader2@6.2.1': 'MIT',
        }
      })
    ],
}];
