


/*
window.onload = ()=> {

    let file = fs.readFileSync('profile.json', 'utf8');
    console.log(file);
    function isEmpty(str){
        return (str == null) || (str.length == 0);
    }
    
    document.getElementById("Login_button").onclick = () => 
    {
        let str1 = document.getElementById("login").value;
        let str2 = document.getElementById("password").value;
        var profiles = parse(file);
        if (isEmpty(str1) || isEmpty(str2)) alert("Поле пустое");
        else if (str1 in profiles) { if (profiles[str1] == str2) return location.href='/main/';
        else alert("Неверный логин или пароль"); } else alert("Неверный логин или пароль");
    }
    
    function parse(obj) {
        let DATA = JSON.parse(obj);
        return DATA;
    }

}
*/