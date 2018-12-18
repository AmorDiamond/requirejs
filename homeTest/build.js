({
	appDir: '../test',
	baseUrl: './js',
	dir: '../build',
	mainConfigFile: './js/require.config.js',
	optimizeCss: 'standard',
	fileExclusionRegExp: /^(build|r)\.js$/,
	modules: [
		{
			name: 'index',
			exclude: ['layer']
		},
		{
			name: 'list',
			exclude: ['jquery']
		}
	]
})