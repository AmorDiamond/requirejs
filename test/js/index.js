require(['jquery', 'layer', 'laydate', 'scrollbar'], function ($, layer, laydate) {
  /*在sea.js和require.js里加载layer，需要配置layer.config来让layer去加载一些它所需要的配件，比如css等*/
  /*当然，你即便不用seajs或者requirejs，也可以通过上述方式设定路径http://layer.layui.com/api.html#layer.config*/
  layer.config({
    path: './lib/layer.3.1.1/'
  })
  console.log($('.scroll-con'))
  $('.scroll-con').mCustomScrollbar({})
  layer.confirm('您是如何看待前端开发？', {
    btn: ['重要','奇葩'] //按钮
  }, function(){
    layer.msg('的确很重要', {icon: 1});
  }, function(){
    layer.msg('也可以这样', {
      time: 20000, //20s后自动关闭
      btn: ['明白了', '知道了']
    });
  });
  console.log(laydate)
  laydate.render({
    elem: '.time' //指定元素
    ,done: function(value, date){
      alert('你选择的日期是：' + value + '\n获得的对象是' + JSON.stringify(date));
    }
    });
  //日期范围
  laydate.render({
    elem: '.time-range'
    ,range: true
  });
  //直接嵌套显示
  laydate.render({
    elem: '.static-time'
    ,position: 'static'
  });
  //前后若干天可选，这里以7天为例
  laydate.render({
    elem: '.set-date-range'
    ,min: -7
    ,max: 7
  });

//时间范围
  laydate.render({
    elem: '.set-time-range'
    ,type: 'time'
    ,range: true
  });
  //自定义重要日
  laydate.render({
    elem: '.custom-info'
    ,mark: {
      '0-10-14': '生日'
      ,'0-12-31': '跨年' //每年的日期
      ,'0-0-5': '工资' //每月某天
      ,'0-0-15': '月中'
      ,'2017-8-15': '' //如果为空字符，则默认显示数字+徽章
      ,'2099-10-14': '呵呵'
    }
    ,done: function(value, date){
      if(date.year === 2017 && date.month === 8 && date.date === 15){ //点击2017年8月15日，弹出提示语
        alert('这一天是：中国人民抗日战争胜利72周年');
      }
    }
  });
})