window.onload=function() {

    var figcation = document.getElementById("featured").getElementsByTagName("figcaption")[0];
    //获取figcaption元素
    var photos = document.getElementById("thumbnails").children;
    //将thumbnails中的所有子元素存入数组，以便访问
    var bigPicture = document.getElementById("featured").getElementsByTagName("img")[0];
    var srcs = ["images/medium/5855774224.jpg", "images/medium/5856697109.jpg", "images/medium/6119130918.jpg",
        "images/medium/8711645510.jpg", "images/medium/9504449928.jpg"];
    var titles = ["Battle", "Luneburg", "Bermuda", "Athens", "Florence"];
    var opacity = 0;

    photos[0].onclick = function () {
        figcation.style.opacity = 0;
        bigPicture.src = srcs[0];
        bigPicture.title = titles[0];
        figcation.innerText = titles[0];

    }
    photos[1].onclick = function () {
        figcation.style.opacity = 0;
        bigPicture.src = srcs[1];
        bigPicture.title = titles[1];
        figcation.innerText = titles[1];


    }
    photos[2].onclick = function () {
        figcation.style.opacity = 0;
        bigPicture.src = srcs[2];
        bigPicture.title = titles[2];
        figcation.innerText = titles[2];
    }
    photos[3].onclick = function () {
        figcation.style.opacity = 0;
        bigPicture.title = titles[3];
        bigPicture.src = srcs[3];
        figcation.innerText = titles[3];
    }
    photos[4].onclick = function () {
        figcation.style.opacity = 0;
        figcation.innerHTML = titles[4];
        bigPicture.title = titles[4];
        bigPicture.src = srcs[4];
    }

    function fadeIn() {
        timer1 = setInterval(function () {
            if (opacity < 0.8) {
                opacity += 0.01;
            } else {
                clearInterval(timer1)
            }
            figcation.style.opacity = opacity;
        }, 12.5)
    }
    function fadeOut() {
        timer2 = setInterval(function () {
            if (opacity > 0) {
                opacity -= 0.01;
            } else {
                clearInterval(timer2)
            }
            figcation.style.opacity = opacity;
        }, 12.5)
    }

    bigPicture.onmouseover = fadeIn()
    bigPicture.onmouseout = fadeOut()
}