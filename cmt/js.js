const arryListCmt = [
    {
        name: "cuong",
        cmt : "cái này đẹp quá"
    },
    {
        name: "khánh",
        cmt : "cái này đẹp quá"
    },
    {
        name: "Kiên",
        cmt : "cái này đẹp quá"
    },
    {
        name: "Kiên",
        cmt : "cái này đẹp quá"
    }
];
function showCmt() {
    //for of
// cấu trúc: for(let 1 of 2) {}
    // 1 : là biến nội bộ và do mình tự đặt và sử dụng
    // 2: là mảng mình muốn qua nó
    let text = document.querySelector(".cmt");
    //clear màn hình show ra rồi mới show để tránh lập lại
    text.innerHTML = "";
for(let item of arryListCmt) {
//    đổ dữ liệu ra html qua công thức dấu ``;
   // ${1} dùng để nối giữa html và các biến js với nhau
   
    text.innerHTML += `
    <p>${item.name}</p>
    <p>${item.cmt}</p>
    `;
}

}
showCmt();

function guiCmt() {
    let _name = document.querySelector("#_name").value;
    let _cmt = document.querySelector("#_cmt").value;
    //hàm thêm giá trị vào trong 1 mảng
    // cấu trúc: 1.push(2)  1: là mảng mình muốn đẩy dự vào 
    // 2 là các giá trị mà mình muốn thêm
    arryListCmt.push({
        name : _name,
        cmt : _cmt
    })
    showCmt();
}
let check = document.querySelector(".check");
check.addEventListener("click" , guiCmt);