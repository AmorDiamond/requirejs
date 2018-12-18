require.config({
  baseUrl: '/devProject/js/',
  paths: {
    jquery: 'https://cdn.bootcss.com/jquery/2.0.0/jquery.min',
    // jquery: 'https://cdn.bootcss.com/jquery/3.0.0/jquery.min',
    scrollbar: './lib/jquery.mCustomScrollbar.concat.min',
    layer: './lib/layer.3.1.1/layer',
    laydate: './lib/laydate/laydate',
    lib: './lib',
  },
  shim:{
    scrollbar: ['jquery'],
    layer: ['jquery'],
  }
})