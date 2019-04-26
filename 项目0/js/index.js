//轮播图代码
// 获得轮播图ul节点
var carousel = document.getElementById("carousel");
var $ul1 = carousel.getElementsByTagName("ul")[0];
//获得轮播指示符ul节点
var $ul2 = carousel.getElementsByTagName("ul")[1];
var $li1 = $ul2.getElementsByTagName("li")[0];
var $li2 = $ul2.getElementsByTagName("li")[1];
var $li3 = $ul2.getElementsByTagName("li")[2];
//打开页面时，第一张图片的轮播指示符变色
$li1.style.backgroundColor = "#930000";
//定义一个全局变量count,统计图片循环的位置
var count=1;
//定义定时器函数
var timer = setInterval(() => {
  var $li;
  if(count==0){
    $li=$li1;
  }else if(count==1){
    $li=$li2;
  }else if(count==2){
    $li=$li3;
  }else if(count==3){
    count=0;
    $li = $li1;
  }
  $li1.style.backgroundColor = "#fff";
  $li2.style.backgroundColor = "#fff";
  $li3.style.backgroundColor = "#fff";
  $li.style.backgroundColor = "#930000";
  $ul1.style=`margin-left:${count*(-1920)}px;`;
  count++;
}, 3000);
//获得轮播指示符ul节点
// var $ul2=carousel.getElementsByTagName("ul")[1];
// var $li1 = $ul2.getElementsByTagName("li")[0];
// var $li2 = $ul2.getElementsByTagName("li")[1];
// var $li3 = $ul2.getElementsByTagName("li")[2];

// 定义鼠标onmouseover事件函数，包含定时结束以及切换到对应图片和原点变色
function change_over(x){
  // 清除定时器
  clearInterval(timer);
  // 切换到对应的图片
  $ul1.style = `margin-left:${x*(-1920)}px;`;
  var $li; 
  if(x==0){
    $li=$li1;
  }else if(x==1){
    $li = $li2;
  }else if(x==2){
    $li = $li3;
  }
  $li1.style.backgroundColor = "#fff";
  $li2.style.backgroundColor = "#fff";
  $li3.style.backgroundColor = "#fff";
  $li.style.backgroundColor="#930000";
}
// 定义鼠标onmouseout事件，包含重新启动定时器
function change_out(x){
  var $li;
  if (x == 0) {
    $li = $li1;
    count=1;
  } else if (x == 1) {
    $li = $li2;
    count=2;
  } else if (x == 2) {
    $li = $li3;
    count=3;
  }
  // $li.style.backgroundColor = "#fff";
  timer = setInterval(() => {
    var $li;
    if (count == 0) {
      $li = $li1;
    } else if (count == 1) {
      $li = $li2;
    } else if (count == 2) {
      $li = $li3;
    } else if (count == 3) {
      count = 0;
      $li = $li1;
    }
    $li1.style.backgroundColor = "#fff";
    $li2.style.backgroundColor = "#fff";
    $li3.style.backgroundColor = "#fff";
    $li.style.backgroundColor = "#930000";
    $ul1.style = `margin-left:${count * (-1920)}px;`;
    count++;
  }, 3000);
}
// 红酒详细图片切换函数 id="wine-content"
// 首先获取5个li的DOM节点
var $wine=document.getElementById("wine");
var $wine_ul=$wine.getElementsByTagName("ul")[0];
var $wine_li=$wine_ul.getElementsByTagName("li");
//页面加载时第一个li的hover属性激活状态
$wine_li[0].style = "background-color:rgba(241,183,183,0.5);"
function li_bgcolor(x){
  for(var i=0;i<5;i++){
    if(x==i){
     $wine_li[i].style="background-color:rgba(241,183,183,0.5);"
    }else{
      $wine_li[i].style="background-color:#fff;"  
    }
  }
}
// 获取5个要切换的div的DOM节点
var $div=document.getElementsByClassName("wine-card");
// 页面加载时默认第一个div显示
$div[0].style = "display:block;";

// 当鼠标划入li上面时对应div的display:block,其余div隐藏
function div_over(x){
  li_bgcolor(x);
  for(var i=0;i<5;i++){
    if(i==x){
      $div[i].style="display:block;"
    }else{
      $div[i].style = "display:none;"
    }
  }
}
