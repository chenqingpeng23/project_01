window.addEventListener('load', function () {
    //获取元素
    var focus = document.querySelector('.focus');
    var uls = document.querySelector('.slideshow');
    var last = document.querySelector('.last');
    var next = document.querySelector('.next');
    var ol = focus.querySelector('.yuandian');
    var focusWidth = focus.offsetWidth;
    //鼠标经过focus 显示左右按钮
    focus.addEventListener('mouseenter', function () {
        last.style.display = 'block';
        next.style.display = 'block';
        //停止自动轮播
        clearInterval(timer);
        timer = noll;
    })
    //鼠标离开focus 隐藏左右按钮
    focus.addEventListener('mouseleave', function () {
        last.style.display = 'none';
        next.style.display = 'none';
        //继续自动轮播
        timer = setInterval(function () {
            next.click();
        }, 3000);
    })
    //动态生成小圆点
    for (var i = 0; i < uls.children.length; i++) {
        var li = document.createElement('li');
        var a = document.createElement('a');
        //生成a时附加一个索引号 index
        a.setAttribute('index', i);
        ol.appendChild(li);
        li.appendChild(a);
        // 获取动态生成的a
        var as = ol.querySelectorAll('a');
        //点击小圆点当前小圆点变色
        as[i].addEventListener('click', function () {
            for (var i = 0; i < as.length; i++) {
                as[i].className = '';
            }
            this.className = 'style_color';
            //点击小圆点轮播图跟着切换图片
            //获取当前a的索引号
            var index = this.getAttribute('index');
            //索引号赋值给num
            num = index;
            circle = index;
            // uls.style.left = -focusWidth * index + 'px';
            animate(uls, -focusWidth * index);
        })
        as[0].className = 'style_color';
    }
    //右侧按钮点击切换图片
    var num = 0;
    var circle = 0;
    //克隆第一张图片到最后
    uls.appendChild(uls.children[0].cloneNode(true));
    next.addEventListener('click', function () {
        if (num == uls.children.length - 1) {
            uls.style.left = 0;
            num = 0;
        }
        num++;
        animate(uls, -focusWidth * num);
        //点击右侧按钮下方小圆点跟着变化
        circle++;
        if (circle == as.length) {
            circle = 0;
        }
        for (var i = 0; i < as.length; i++) {
            as[i].className = '';
        }
        as[circle].className = 'style_color';
    })
    //左侧按钮
    last.addEventListener('click', function () {
        if (num == 0) {
            num = uls.children.length - 1;
            uls.style.left = -num * focusWidth + 'px';
        }
        num--;
        animate(uls, -focusWidth * num);
        //点击右侧按钮下方小圆点跟着变化
        circle--;
        if (circle < 0) {
            circle = as.length - 1;
        }
        for (var i = 0; i < as.length; i++) {
            as[i].className = '';
        }
        as[circle].className = 'style_color';
    })
    //自动轮播
    var timer = setInterval(function () {
        next.click();
    }, 3000);


    //鼠标经过轮播图
    // focus.addEventListener('mouseenter', function () {
    //     last.style.display = 'block';
    //     next.style.display = 'block';
    //     clearInterval(timer);
    //     //清除
    //     timer = null;
    // })
    // //鼠标离开轮播图
    // focus.addEventListener('mouseleave', function () {
    //     last.style.display = 'none';
    //     next.style.display = 'none';
    //     timer = setInterval(function () {
    //         next.click();
    //     }, 2000)
    // })
    // //动态生成小圆点
    // for (var i = 0; i < uls.children.length; i++) {
    //     var li = document.createElement('li');
    //     var a = document.createElement('a');
    //     a.setAttribute('index', i);
    //     ol.appendChild(li);
    //     li.appendChild(a);
    //     var as = ol.querySelectorAll('a');
    //     //小圆点点击变色（排他思想）
    //     a.addEventListener('click', function () {
    //         for (var i = 0; i < as.length; i++) {
    //             as[i].className = '';
    //         }
    //         this.className = 'style_color';
    //         //点击小圆圈移动图片

    //         var index = this.getAttribute('index');
    //         //点击后获取索引号赋值给num
    //         num = index;
    //         circle = index;
    //         animate(uls, -focusWidth * index);
    //     })
    // }
    // ol.children[0].children[0].className = 'style_color';
    // // //克隆第一张图片放到最后
    // // uls.appendChild(uls.children[0].cloneNode(true));
    // var first = uls.children[0].cloneNode(true);
    // uls.appendChild(first);
    // //封装函数小圆点类目
    // function circleChange() {
    //     //清除小圆圈样式
    //     for (var i = 0; i < as.length; i++) {
    //         as[i].className = '';
    //     }
    //     //当前小圆圈加类名
    //     as[circle].className = 'style_color';
    // }
    // //右侧按钮
    // var num = 0;
    // var circle = 0;
    // next.addEventListener('click', function () {
    //     //判断
    //     if (num == uls.children.length - 1) {
    //         uls.style.left = 0;
    //         num = 0;
    //     }
    //     num++;
    //     animate(uls, -focusWidth * num);
    //     //点击右侧按钮小圆圈一起变化
    //     circle++;
    //     if (circle == ol.children.length) {
    //         circle = 0;
    //     }
    //     circleChange()
    // })
    // //左侧按钮
    // last.addEventListener('click', function () {
    //     //判断
    //     if (num == 0) {
    //         uls.style.left = (uls.children.length - 1) * -focusWidth + 'px';
    //         num = uls.children.length - 1;
    //         circle = num;
    //     }
    //     num--;
    //     animate(uls, -focusWidth * num);
    //     //点击左侧按钮小圆圈一起变化
    //     circle--;
    //     if (circle < 0) {
    //         circle = ol.children.length;
    //     }
    //     circleChange()
    // })
    // var timer = setInterval(function () {
    //     next.click();
    // }, 3000)
})