
// function là một hàm và được dùng rất nhiều trong làm web
// có 4 kiểu hàm: 
//     1: hàm không có giá trị trả về và truyền vào
            // vd : function 1() { 2}
                // 1 : là tên hàm
                // 2: là công việc để thực hiện trong hàm
//     2: hàm không có giá trị trả về và  có giá trị truyền vào
            // vd : function 1(2) { 3}
                // 1 : là tên hàm
                // 2 : là tham số tạm dùng để thực thi trong hàm
                // 3: là công việc để thực hiện trong hàm
//     3: hàm  có giá trị trả về và  có giá trị truyền vào
            // vd : function 1(2) { 3  return ...}
                // 1 : là tên hàm
                // 2 : là tham số tạm dùng để thực thi trong hàm
                // 3: là công việc để thực hiện trong hàm
                // có return là hàm có giá trị trả về
//     4: hàm  có giá trị trả về nhưng không có giá trị truyền vào
            // vd : function 1() { 2  return ...}
                // 1 : là tên hàm
                // 2: là công việc để thực hiện trong hàm
                // có return là hàm có giá trị trả về
// lưu ý : 1:hàm chỉ được thực hiện và duyệt đến khi và chỉ khi hàm được gọi tên
//         2: cứ có cú pháp function là lúc đó hàm được khởi tạo và các công việc vẫn chưa được thực hiện nếu chưa được gọi
// tính tổng 3 số tự nhiên
// VD: kiểu 1 :
        function sum() {
            let a = 10, b=11,c=12;
            console.log(a+b+c);
        }
    // Kiểu 2
        function sumTwo(a,b,c) {
            console.log(a+b+c);
        }
    //kiểu 3 : 
        function sum3(a,b,c) {
            return a+b+c;
        }
    // kiểu 4
        function sum4() {
            let a = 10, b=11,c=12;
           return a+b+c;
        }

//DOM : dùng để tương tác hay còn gọi là liên kết giữa các file html css và js
//    một số cú pháp dùng để lấy giá trị từ html

// không khác gì cách em css vào trang web
// let b = document.getElementById("one");
// console.log(b);
// let c = document.getElementsByClassName("one");
// console.log(c);
let a = document.querySelector("input");
function click() {
    let a = document.querySelector("input").value;
    console.log(a);
}
a.addEventListener("keypress" , click);
// hàm addEventListener("1",2) dùng để tạo sự kiện trong thẻ ở bên js chứ k phải bên html
// 1 : là sự kiện mà em muốn
// 2 : hàm muốn thực hiện trong sự kiện đó

// tạo ra một input và 1 button bên html rồi thực hiện cộng việc nhập vào input giá trị và in ra nó khi được bấn vào nút button
// làm slide show
