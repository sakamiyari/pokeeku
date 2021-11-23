/*完全テスト用js*/
let jikan=new Date();//時刻取得
let img=document.getElementById("img");
function syori(){
    let getu=jikan.getMonth()+1;//月
    let nen=jikan.getFullYear();//年
    let picuptime_1=new Date(2021,11,1,0,0,0);
    let picuptime_2=new Date(2022,1,1,0,0,0);//未定
    getu=picuptime_1.getMonth()-getu
    nen=picuptime_2.getFullYear()-nen;
    console.log(getu);
    if(getu==1){
        img.src="picupimg/gure.png"
    }else{
        document.getElementById("picup").innerHTML="現在開催中のイベントはありません"
    }
    if (nen==1){
        img.innerHTML="調整中"
    }
    else{
        document.getElementById("picup").innerHTML="現在開催中のイベントはありません"
    }
}
syori();
setInterval(syori,10000);