const userID = document.querySelector('.userId');
const password = document.querySelector('.password');
const logBtn = document.querySelector('loginBtn');

function login(){
    if(userID.value === "" ){
        alert('아이디를 입력 해 주세요');
    }else if(password.value === ""){
        alert('비밀번호를 입력 해 주세요');
    }
}