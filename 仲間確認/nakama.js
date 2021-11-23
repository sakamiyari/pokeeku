let  restoredSession =[] 
restoredSession = localStorage.getItem('nakama');//仲間呼び出し
if(!restoredSession){
    //何も仲間にしていない時
    let p=document.getElementById("p");
    p.innerText="仲間はいません"
}else{
    //仲間にしている場合
    //先に要素取得させて
    let ul=document.getElementById("ul");
    //次に文字列を数字列に治す
    restoredSession=JSON.parse(restoredSession);
    restoredSession.forEach( elemt=> {
        let li=document.createElement("li")
        li.innerText=elemt;
        if(elemt){
        ul.appendChild(li);
        console.log(ul);
        }
    });
}
console.log(restoredSession);