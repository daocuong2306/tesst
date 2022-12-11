const arryListUser = [
    {
        user : "cuong",
        pass : 12345
    }
];

function login() {
    let user = document.querySelector("#user").value;
    let pass = document.querySelector("#pass").value;
    let url = document.querySelector("._url");
    url.href = "";
    for(let i=0; i <arryListUser.length;i++) {
        if((user == arryListUser[i].user) && (pass == arryListUser[i].pass)) {
            url.href = "dangki.html";
        }
    }
}
let dangnhap = document.querySelector(".dangnhap"); 
dangnhap.addEventListener("click" , login);