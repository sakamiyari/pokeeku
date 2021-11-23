var a=document.getElementById("tan")
var osirase=document.getElementById("se")//制限回数のお知らせ
var botan_f=document.getElementById("show-btn");//制限回数なると押せなくなる用
console.log(a);
let i;//カウント用
let seigen;//ガチャ回数
let nakama=[];//再定義防止用
var zanryou=document.getElementById("isinokazu")
function osita(){
    let isi=localStorage.getItem("storn");//最初に取得
    if(isi){
        //ローカルストレージに何か入っていれば実行
        isi=JSON.parse(isi);//数字列に変換
        window.alert("石を消費します。");
        if(isi<150){
            window.alert("石の数が足りません");
            osirase.innerHTML="石の数が足りません"
            botan_f.disabled=true;
        }else if(window.confirm("result:"+isi+"=>"+(isi-150))){
            //確認でokボタンを確認。
            isi=JSON.parse(isi);
            isi-=150;//150こ消費する
            localStorage.setItem("storn",JSON.stringify(isi));
            var deme=[];
            var irekae;
            for (var i=1;i<=10;i++){
                var ransuu=Math.floor(Math.random()*800);
                deme[i]=ransuu;
            }
            //ソートする
            for (var i=10;i>=1;i--){
                for(var j=1;j<=9;j++){
                    if (deme[j]>deme[j+1]){
                        irekae=deme[j+1]
                        deme[j+1]=deme[j];
                        deme[j]=irekae;
                    }
                }
            }
            var lealist=["プクリン","ジュプトル","ムンナ","デンリュウ","サザンドラ","エーフィ、ブラッキー","ノコッチ、エモンガ","ビリジオン"];
            if (a.checked){
                console.log("単発")
                console.log(deme[3]);
                if(deme[3]>400){
                    //document.getElementById("tokubetu").src=""現在一匹なので
                }else if(deme[3]<400){//レア度調整。数字を小さくするとレアなポケモンが当たりやすくなる。デフォルト400
                    var sentaku=Math.ceil(Math.random()*(9));
                    document.getElementById("a").innerHTML="レア度4以下でポケモンが:"+deme[sentaku];
                    console.log(deme[sentaku])
                }else{
                    var rearan=Math.ceil(Math.random()*(lealist.length-1));//レアなポケモンの選択になる
                    document.getElementById("a").innerHTML="レア度5以上でポケモンが:"+lealist[rearan];
                }
            }else{
                console.log("10連")
                document.getElementById("a").innerHTML="現在テスト中です申し訳ございません。"
            } 
            //仲間保存よう
            let handan=localStorage.getItem("nakama");
            if(!handan){
            nakama.push(deme[sentaku]);
            localStorage.setItem("nakama",JSON.stringify(nakama));
            }else{
            nakama=localStorage.getItem("nakama");
            nakama=JSON.parse(nakama);
            nakama.push(deme[sentaku]);
            localStorage.setItem("nakama",JSON.stringify(nakama));
            }
        }
        if (isi){
            zanryou.innerHTML=isi
            }else{
            zanryou.innerHTML="0";
            }
    }  
//制限回数
/*
let seigen_handan=localStorage.getItem("seigen");
if(!seigen_handan){
localStorage.setItem("seigen","3");
seigen=localStorage.getItem("seigen");
seigen=JSON.parse(seigen);
osirase.innerHTML="残り"+seigen+"回"
}else{
seigen=localStorage.getItem("seigen");
seigen=JSON.parse(seigen);
seigen--;
localStorage.setItem("seigen",JSON.stringify(seigen));
    if(seigen>0){
        osirase.innerHTML="残り"+seigen+"回"
    }else{
        osirase.innerHTML="本日はこれでおしまい"
        botan_f.disabled=true;
    }
}
*/
}
//制限回数
/*
let seigen_handan=localStorage.getItem("seigen");
if(!seigen_handan){
}else{
    //再度読み込んだ時に制限回数通りに機能するよう
    seigen=localStorage.getItem("seigen");
    seigen=JSON.parse(seigen);
    if(seigen>0){
        osirase.innerHTML="残り"+seigen+"回"
    }else{
        osirase.innerHTML="本日はこれでおしまい"
        botan_f.disabled=true;
    }
}
*/
let isi=localStorage.getItem("storn");
isi=JSON.parse(isi);
if(!isi){
    localStorage.setItem("storn","400");//テスト用!!!!!
}else{
    if(isi<150){
        osirase.innerHTML="石の数が足りません"
        botan_f.disabled=true;

    }
}
isi=localStorage.getItem("storn");
if (isi){
    zanryou.innerHTML=isi
    }else{
    zanryou.innerHTML="0";
    }