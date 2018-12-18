require.config({
  baseUrl: './lib/',
  paths: {
    jquery: 'https://cdn.bootcss.com/jquery/2.0.0/jquery.min',
    // jquery: 'https://cdn.bootcss.com/jquery/3.0.0/jquery.min',
    scrollbar: 'jquery.mCustomScrollbar.concat.min',
    layer: 'layer.3.1.1/layer',
    laydate: 'laydate/laydate'
  },
  shim:{
    scrollbar: ['jquery'],
    layer: ['jquery'],
  }
})