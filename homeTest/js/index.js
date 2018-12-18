require(['two', 'layer'], function (a,layer) {
	layer.config({
		path: './js/lib/layer/'
	})
	console.log(a, layer)
	layer.msg('dddd')
})
/*require(['jquery'], function ($) {
	console.log($)
})*/