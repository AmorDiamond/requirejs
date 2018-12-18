({
  appDir: '../devProject',
  baseUrl: './js',
  dir: '../productDir',
  mainConfigFile: './js/require.config.js',
  modules: [
    { name: 'index'}
  ],
  fileExclusionRegExp: /^(r|build)\.js|.*\.scss$/,
  optimizeCss: 'standard',
  removeCombined: true
})