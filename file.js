function toMain() {
  var str1 = document.getElementById("password1").value;
  var str2 = document.getElementById("password2").value;
  if (str1 !== str2) {
   alert("Пароли не совпадают")
  }
  else if (isEmpty(str1)) alert("Поле пустое");
  else return location.href='main.html'
}
 
function isEmpty(str){
  return (str == null) || (str.length == 0);
}

function Login() {
  var str1 = document.getElementById("login").value;
  var str2 = document.getElementById("password").value;
  if (isEmpty(str1) || isEmpty(str2)) alert("Поле пустое");
  else return location.href='main.html'
}

function Get_json() {
  
}


