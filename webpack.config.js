/**
 * 不是真实的 webpack 配置，仅为兼容 webstorm 和 intellij idea 代码跳转
 * ref: https://github.com/umijs/umi/issues/1109#issuecomment-423380125
 */

module.exports = {
  resolve: {
     extensionAlias: {
      '.js': ['.ts', '.js', '.tsx', '.jsx'],
      '.mjs': ['.mts', '.mjs'],
    },
    alias: {
      '@': require('path').resolve(__dirname, 'src'),
    },
  },
   module: {
    rules: [{ test: /\.mjs$/, use: 'babel-loader' }],
  },
  devServer:{
    http2: true,
    https: {
      key: fs.readFileSync('/etc/letsencrypt/live/crm.gadgetufa.ru/privkey.pem'),
      cert: fs.readFileSync('/etc/letsencrypt/live/crm.gadgetufa.ru/cert.pem'),
      ca: fs.readFileSync('/etc/letsencrypt/live/crm.gadgetufa.ru/chain.pem'),
    }
  }
};
