require.config({
	baseUrl: '/test/js/',
	paths: {
		jquery: './lib/jquery.min',
		layer: './lib/layer/layer',
		two: './lib/page/two',
		lib: './lib'
	},
	shim: {
		// layer: ['jqeury']
	}
})