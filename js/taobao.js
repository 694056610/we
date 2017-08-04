/* 
* @Author: anchen
* @Date:   2017-08-04 09:29:36
* @Last Modified by:   anchen
* @Last Modified time: 2017-08-04 16:59:04
*/
/*function getStyle(obj,attr){
    return getComputedStyle(obj,null)[attr];
}
function animate(obj,target){
    clearInterval(obj.timer);
    var speed=obj.offsetLeft>target?-10:10;
    obj.timer=setInterval(function(){
        obj.style.left=obj.offsetLeft+speed+"px";
        var result=target-obj.offsetLeft;
        if(Math.abs(result)<=10){
            clearInterval(obj.timer);
            obj.style.left=target+"px";
        }
    },50)
}
window.onload=function(){
    var box=document.getElementById("box");
    var ul=document.getElementById("ul");
    var ullis=ul.children;
    var ol=document.getElementById("ol");
    var ollis=ol.children;
    var w=parseInt(getStyle(ullis[0],"width"));
    var oleft=0;
    var n=0;
    ollis[0].className="current";
    ul.appendChild(ullis[0].cloneNode(true));
    
    var timer=null;
    var key=0;
    var s=0;
    timer=setInterval(autoplay, 2000);
    function autoplay(){
        key++;
        if(key>ullis.length-1){
            ul.style.left=0;
            key=1;
        }
        animate(ul,-key*w);
        s++;
        if(s>ollis.length-1){
            s=0;
        }
        for(var i=0;i<ollis.length;i++){
            ollis[i].className="";
        }
        ollis[s].className="current";
    }

    ul.addEventListener("touchstart",function(ev){
        var ex=ev.changedTouches[0].pageX;
        ev.preventDefault();
        oleft=this.offsetLeft;

        ul.addEventListener("touchmove",function(ev){
            clearInterval(timer);
            var dis=ev.changedTouches[0].pageX-ex;
            ul.style.left=oleft+dis+"px";
        })
        ul.addEventListener("touchend",function(ev){
            n=Math.round(this.offsetLeft/w);
            if(n>0){
                n=0;
            }else if(n<-(ullis.length-1)){
                n=-(ullis.length-1);
            }
            ul.style.left=n*w+"px";
        })
    })
}
  */
   var mySwiper=new Swiper(".banner",{
    autoplay:2000,//自动轮播
    // direction:"vertical", //纵向轮播
    loop:true,  //无缝轮播
    pagination:".swiper-pagination",//分页器
    autoplayDisableOnInteraction : false,//用户自动切换不会停止 每次都会重新启动

 })