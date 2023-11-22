function show_profile(){
    if (count == 0) {
        let el, s;
        el=document.getElementById("add_el");
        s=el.innerHTML;
        s=s+`<div class = "profile text">
            <div class="tt2"><a class="lin" href="favorites.html">Избранное</a></div>
            <div class="tt3"><a class="lin" href="add.html">Добавить идею</a></div>
            <div class="tt4"><a class="lin" href="file.html">Выйти</a></div>
        </div>`;
        el.innerHTML=s;
        count = 1;
    }
    else {
        let el, s;
        el=document.getElementById("add_el");
        s=el.innerHTML;
        s='';
        el.innerHTML=s;
        count = 0;
    }
    
};

function clik(el){
    el.parentNode.removeChild(el);
 };

let count = 0;


 function Play(id){
    const aud = document.getElementById("ms" + id[id.length - 1])
    if (aud.paused) aud.play()
    else aud.pause()
}