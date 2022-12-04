// cách khai báo gồm 3 cách : const var let 
// nhưng chỉ nên dùng 2 cách : const let 
// cú pháp để khai báo biến
// let 1 = 2;
// 1 : là tên của biến và phải đặt tên biến theo kí tự con lặc đà
// 2 : là giá trị mà biến đó mình muốn cho
// = : là phép gán giá trị của biến
// cách in ra để xem giá trị của biến mình muôn :  console.log();
// ---------------------
// các kiểu dữ liệu cơ bản trong js
// number , string , arry , obj , null , undefile , boolean
// cách khai bảo kiểu Number : let a = 10;
// cách khai bảo kiểu string : let b = "cuong";
// kiểu boolean : true và false
// kiểu arry : cách khai báo : let arry = [];
// vd:
let arry = [1,2,4,"10",2,3,5,7,8,[1,2,3,5]];
// các giá trị ở trong arry đều mang một vị trí gọi là index và index bắt đầu từ 0
// cách lấy giá trị trong arry
// console.log(1[2]);
//1 : là tên của mảng mình mốn lấy giá trị
// 2 : là vị trí index của giá trị muốn lấy
console.log("toán "+arry[3]);
// OBJ 
// cấu trúc obj : let 1 = {key:value}
//1 là tên của obj
// key : là tên gọi của giá trị bên trong obj
// value : là giá trị của biến đó
// vd
let obj = {
    name : "cuong",
    age : 25
}
console.log(obj['name']);
// console.log(1['2']);
//1 : là tên của mảng mình mốn lấy giá trị
// 2 : là key của giá trị muốn lấy
// ----------------------------------------------------
//Toán tử 
// +,-,*,/,++,--,%
// ++ : là cộng thêm 1 đơn vị vào giá trị mình muốn.
// vd :
let a=10 ;
a++;
console.log(a); 
// -- : là trừ đi 1 đơn vị vào giá trị mình muốn.
// vd :
let b=10 ;
b--;
console.log(b); 
// % : là chia lấy phần dư
// vd : 4%2 = 0 ; 5%2 = 1 ; 
let pi = 5;
let f = 2;
let chia = pi%f;
console.log(chia)
//toán hạng 
// <,> , <= , >= , == , === , !=
// === : là để so sánh nhưng kín kẽ hơn thằng == 
// != : phụ định của ==
// bài 1 : cho 3 điểm toán , văn , anh. Tính điểm trung bình cộng của 3 điểm đó
// bài 2 : 3 điểm trên đc viết trong mảng : vd : let a = [2,4,6]
// bài 3 : 3 điểm trên đc viết trong obj : vd : let a = { toan : 5 , ly : 6 , hoa: 9}
//--------------------------------------------------------
//if
// cấu trúc 1 câu lệnh if
// if (1) { 2}
// 1 : là giá trị để if kiểm tra
// 2 : phần công việc nếu 1 đúng 
// vd  : nếu điểm lớn hơn 5 thì qua môn
let diem = 5;
if (diem >5) { console.log("qua môn")}
// if else 
//cấu trúc của câu lệnh if else 
// if (1) { 2}
// else {3};
// 1 : là giá trị để if kiểm tra
// 2 : phần công việc sẽ được thực hiện nếu 1 đúng 
// 3 : phần công việc sẽ được thực hiện nếu 1 k đúng
if (diem >5) { console.log("qua môn")} 
else {console.log("tạch")};
// if elif else
// if (1) { 2}
// else if (3) {4}
// else {5};
// 1 : là giá trị để if kiểm tra
// 2 : phần công việc sẽ được thực hiện nếu 1 đúng 
// từ 3 trở đi là phần sẽ được thức hiện nếu 1 sai , còn nếu 1 đúng nó sẽ bỏ qua tất cả
// 3 : là giá trị để if kiểm tra 
// 4 : phần công việc sẽ được thực hiện nếu 3 đúng 
// 5 : phần công việc sẽ được thực hiện nếu bên trên nó k có cái nào đúng
// vd  : nếu điểm lớn hơn 5 thì qua môn, điểm bằng 5 thì thi lại , điểm nhỏ hơn 5 thì tạch
if (diem >5) { console.log("qua môn")} 
else if (diem==5) {console.log("thi lại")}
else {console.log("tạch")};
//-------------------------------------------------------------
// for (thường)
// cấu trúc của for(1,2,3) {4}
// 1 : là điểm bắt đầu của chạy của for : let i = 0;
// 2 : điều kiện để thoát khỏi vòng lặp , cũng như độ dài của vòng lặp
// 3 : biến tác động vào vòng lặp để giúp có thể thoát khỏi vòng lặp
// vd : tính tổng các số chẵn từ 0 cho đến 4
let sum = 0;
for (let i =0 ;i<=4;i++) {
    if(i%2==0) { sum +=i;} //viết tắt của sum = sum +i;
    console.log(sum)
}
console.log(sum);
// vd : tính tổng các phần tử chẵn trong mảng
const arryb = [1,2,3,4,5,9];
//dùng cú pháp 1.length để tính độ dài của mảng : 1 là tên mảng
console.log(arryb.length)
for(let i=0 ;i<arryb.length;i++) {
    console.log(arryb[i]);
}
///
// bài 1 : tìm ra các số lẻ trong mảng tự cho
// bài 2 : nhập vào một số bất kì và trả gia xem nó có phải số hoàn hảo k
// bài 3(nâng cao) : cho 1 mảng let arryd = [[2,3,4],[4,8,9],[2,1,9]]; tính tổng tất cả các số  