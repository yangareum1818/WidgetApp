// 시작시 랜덤 이미지 넣기
function setDefaultImageWhenRenderStart() {
    const bgImage = document.querySelector("main");
    const images = [ "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg" ]

    const firstDefaultRandomImage = images[Math.floor(Math.random() * images.length)]
    bgImage.style.backgroundImage = `url(assets/img/${firstDefaultRandomImage})`
}

setDefaultImageWhenRenderStart();
