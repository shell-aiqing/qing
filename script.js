// JS部分，修改了按钮点击事件的处理方式
document.addEventListener("DOMContentLoaded", function () {
    const introVideo = document.getElementById("introVideo");
    const introContainer = document.getElementById("introContainer");
    const mainContainer = document.getElementById("mainContainer");
    const videoBtn = document.getElementById("videoBtn");
    const flowerBtn = document.getElementById("flowerBtn");
    const moneyBtn = document.getElementById("moneyBtn");
    const flowerContainer = document.getElementById("flowerContainer");
    const incenseContainer = document.getElementById("incenseContainer");
    const videoContainer = document.getElementById("videoContainer");
    const lifeVideo = document.getElementById("lifeVideo");
    const bgm = document.getElementById("bgm");
    const closePage = document.getElementById("closePage");

    bgm.volume = 0.3;
    bgm.play().catch(err => console.log("背景音乐播放失败:", err));

    document.body.addEventListener("click", function playMedia() {
        bgm.play().catch(err => console.log("背景音乐播放失败:", err));
        introVideo.play().catch(err => console.log("视频播放失败:", err));
        document.body.removeEventListener("click", playMedia);
    });

    introVideo.addEventListener("ended", function () {
        introContainer.style.display = "none";
        mainContainer.style.display = "block";
    });

    videoBtn.addEventListener("click", function () {
        videoContainer.style.display = "block";
        lifeVideo.currentTime = 0;
        lifeVideo.play().catch(err => console.log("lifeVideo 播放失败:", err));
    });

    flowerBtn.addEventListener("click", function () {
        // 清空容器并添加新图片
        flowerContainer.innerHTML = '';
        const img = document.createElement("img");
        img.src = "flower.png";
        img.alt = "鲜花";
        flowerContainer.appendChild(img);
    });

    moneyBtn.addEventListener("click", function () {
        // 清空容器并添加新视频
        incenseContainer.innerHTML = '';
        const video = document.createElement("video");
        video.src = "incense.webm";
        video.autoplay = true;
        video.loop = true;
        video.setAttribute("playsinline", "");
        video.muted = false;
        video.classList.add("transparentVideo");
        incenseContainer.appendChild(video);
    });

    closePage.addEventListener("click", function () {
        window.close();
        document.getElementById("closeTip").style.display = "block";
    });
});