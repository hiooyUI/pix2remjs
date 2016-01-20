/*! pix2rem 2015-12-31 Author:Nelson Kuang license:MIT */
!function () {
    function pix2rem() {
        var isMobile = {
            UCBrowser: function () {
                return navigator.userAgent.match(/UCBrowser/i);
            },
            MicroMessenger: function () {
                return navigator.userAgent.match(/MicroMessenger/i);
            },
            Android: function () {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iPad: function () {
                return navigator.userAgent.match(/iPad/i);
            },
            iPhone: function () {
                return navigator.userAgent.match(/iPhone/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPod|iPad/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };
        var screenW = window.screen.width,
            dpr = window.devicePixelRatio,
            mockupW = 750;//mockup's width，模板的宽度
        //set the root element's font-size(<html/>) dinamicly below.下面动态设置html根元素的font-size
        if (isMobile.UCBrowser() || (isMobile.MicroMessenger() && !isMobile.iPhone())) {//mobile UC or other Wechat's inner browser in non-iphone devices，手机UC浏览器或者其他在非iphone设备中的微信内置浏览器
            if (screenW > mockupW) {
                document.querySelector('html').style.fontSize = screenW / dpr / 10 + 'px';
            } else {//for some exceptional cases，like Wechat's inner browser in MEIZHU phone.特殊处理，如魅族手机的微信内置浏览器
                document.querySelector('html').style.fontSize = screenW / 10 + 'px';
            }
            if (!isMobile.any()) {//Wechat PC version.电脑版微信
                document.querySelector('html').style.fontSize = mockupW / 10 + 'px';
            }
        } else if (isMobile.iPhone()) { //iphone
            document.querySelector('html').style.fontSize = screenW / 10 + 'px';

        } else if (isMobile.iPad()) {//ipad
            document.querySelector('html').style.fontSize = mockupW / 10 + 'px';

        } else if (isMobile.any()) {
            if (screenW / 10 > 70) {//Mobile QQ 
                document.querySelector('html').style.fontSize = screenW / dpr / 10 + 'px';
            }else{
                document.querySelector('html').style.fontSize = screenW / 10 + 'px';
            }

        } else {
            if (window.innerWidth <= mockupW) {
                document.querySelector('html').style.fontSize = window.innerWidth / 10 + 'px';
            }
            else
                document.querySelector('html').style.fontSize = mockupW / 10 + 'px';
        }
    }
    pix2rem();
    window.onresize = function () {
        pix2rem();
    }
}();
