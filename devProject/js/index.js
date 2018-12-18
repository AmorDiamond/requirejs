require(['layer', 'one'], function (layer, a) {
  console.log('indexlayer', layer)
  console.log('a', a)
  layer.config({
    path: './js/lib/layer.3.1.1/'
  })
  console.log($)
  layer.msg('eee')
})