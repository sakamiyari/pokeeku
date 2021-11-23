var osirase=document.getElementById("se")//制限回数のお知らせ
let rea_pokemon=document.getElementById("rea")//レアポケモンの場合表示するよう
let rea=[
"../kyaraimg/doga-su.png",
"../kyaraimg/emo.jpg",
"../kyaraimg/gure.png",
"../kyaraimg/jupu.png",
"../kyaraimg/sere.png",
"../kyaraimg/sukatanku.png",
"../kyaraimg/zugatto.png"
];//レアキャラのリンク。
let rea_ban=[
109,
587,
453,
253,
251,
435,
41
];//レアポケモンの番号
let modal_body=document.getElementById("moji")
let sonota=document.getElementById("sonota");//レアじゃないポケモンの場合
let nakama=[];
let nakama_handan=localStorage.getItem("nakama");
//デフォルトで表示するよう
function defo(){
    let isi_moji=document.getElementById("isinokazu");
    let isi_yobikomi=localStorage.getItem("storn");
    if(isi_yobikomi){
        isi_moji.innerText=isi_yobikomi
    }else{
        isi_moji.innerText="0"
    }
}
//最初に訪れたよう
defo()
function gyta(buttonOpen,modal){
    let isi=localStorage.getItem("storn");//最初に取得
    if(isi){
        //ローカルストレージに何か入っていれば実行
        isi=JSON.parse(isi);//数字列に変換
        window.alert("石を150個消費します。");
        if(isi<150){
            window.alert("石の数が足りません");
            osirase.innerHTML="石の数が足りません"
            buttonOpen.disabled=true;
        }else if(window.confirm("result:"+isi+"=>"+(isi-150))){
            //確認でokボタンを確認
            modal.style.display = 'block';
            isi=JSON.parse(isi);
            isi-=150;//150こ消費する
            localStorage.setItem("storn",JSON.stringify(isi));
            let deme=Math.floor(Math.random()*898);//ポケモンの番号
            if(!nakama_handan){
                nakama.push(deme);
                localStorage.setItem("nakama",JSON.stringify(nakama));
            }else{
                nakama=JSON.parse(nakama_handan);
                nakama.push(deme);
                localStorage.setItem("nakama",JSON.stringify(nakama));
            }
            let flag=0;//フラグ管理
            for(var i=0;i<=rea.length;i++){
                if(deme==rea_ban[i]){
                 rea_pokemon.src=rea[i]//出目通りの絵を引き出す
                 flag=1;//フラグを1にして一致しない場合を起動させなくする。
                 break;
                }
            }
           //ここまで
            //一致しなかった場合
            if(flag==0){
                modal_body.innerText=deme;
                sonota.href="https://zukan.pokemon.co.jp/detail/"+deme;
                sonota.innerHTML="クリックしてポケモンの画像を見る"
            }
            defo();//デフォルトで表示するやつを呼び出す
        }
    }
}