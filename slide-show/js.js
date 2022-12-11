//tạo ra một mảng chứa các đường link dẫn tới ảnh 
const arryListImg = [
    '../img/image 26 (3).png',
    '../img/image 26 (4).png',
    '../img/image 26 (5).png',
];
//viết 1 func dùng để làm slide show
let i = 0;
function trai() {
    if(i==arryListImg.length) i=0;
    let img = document.querySelector("img");
    console.log(img.scr);
    img.src = arryListImg[i];
    i++;
}
let buttonT = document.querySelector(".phai");
buttonT.addEventListener("click" , trai);