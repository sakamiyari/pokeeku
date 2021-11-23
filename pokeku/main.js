let a=document.getElementById("p");
let kaisuu=1;
function osita(){
    switch (kaisuu){
        case 1:
            a.innerHTML="てまえをクリックしても何も起こらないよー。"
        break;
        case 10:
            a.innerHTML="そんなに触られるとくすぐったいですー。"
        break;
        case 20:
            a.innerHTML="だからなにもおこらないですー。"
        break;
        case 50:
            a.innerHTML="はやくなにをするかえらぶですー。"
        break;
        case 100:
            a.innerHTML="100かいもてまえをクリックしたのですー。これ以上は本当になにもおこらないですー。"
        break;
    }
    kaisuu++;
}
let isi=document.getElementById("hyouji");
let isi_syoji=localStorage.getItem("storn");
if(!isi_syoji){
    isi.innerText="0"
}else{
    isi.innerText=isi_syoji;
}