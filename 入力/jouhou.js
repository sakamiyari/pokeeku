//名前で使用禁止を作る
let ngword=[
    "うんこ","くそ","へたくそ","くそったれ",
    "しね","死ね","ころす","殺す","ばか",
    "ペニス","童貞","どうてい","おっぱい",
    "ぱいぱい","ごみ","セックス","草",
    "ふん","糞","ちんちん","イチャイチャ",
    "まんこ","おまんこ","しょじょ","処女",
    "レイプ","れいぷ","ぺにす","ｳﾝｺ","ｸｿ",
    "ｼﾈ","シネ","コロス","コロナ","ｺﾛｽ","ｺﾛﾅ",
    "ﾄﾞｳﾃｲ","ﾌﾝ","ﾁﾝﾁﾝ","ｾｯｸｽ","ﾚｲﾌﾟ","ﾍﾟﾆｽ",
    "ｵｯﾊﾟｲ","ｼｮｼﾞｮ","くそやろう","クソヤロウ",
    "567","ピー","くそげー","ｸｿｹﾞｰ","クソゲー",
    "キモ","ほも","ホモ","ﾎﾓ","ﾎﾓｫ","ほもぉ","ホモォ",
    "きも","きもい","変態","へんたい","ヘンタイ","ﾍﾝﾀｲ"
];
let ng_flag=0;//フラグ回収用
function sumbit(){
    let jouhou=document.getElementsByTagName("form");//一様取得させる
    /** 
     * @param jouhou デバックで確認できる
     * jouhou[0][0]=名前
     * jouhou[0][1]=男性選択
     * jouhou[0][2]=女性選択
     * jouhou[0][3]=性別不明
     * jouhou[0][4]~jouhou[0][31]=ポケモン
     * jouhou[0][33]=波動の色
     * jouhou[0][32]=ポケモンのテキスト情報
     * ([0][32]は使わない)
     *  */
    console.log(jouhou);
    console.log(jouhou[0][33][1].selected);

    //名前を引き出す
    let namae;
    namae=jouhou[0][0].value
    if(!namae){
        window.alert("名前が入力されていません")
    }else{
        ng_flag=0;//再入力したときにフラグを0にしておかないと全て使用できなくなる。
        for(let i=0;i<=ngword.length;i++){
            if(namae==ngword[i]){
                ng_flag=1;
                window.alert("恐れ入りますが、その名前は使用できません")
                break;
            }
        }
        let namae_kuuhaku=namae.split("");
        console.log(namae_kuuhaku)
        for(let i=0;i<namae_kuuhaku.length;i++){
            if(namae_kuuhaku[i]==" "||namae_kuuhaku[i]=="　"){
                ng_flag=1;
                window.alert("恐れ入りますが、名前に全角、もしくは半角の空白を入れることはできません。");
                break;
            }
        }
        if(namae_kuuhaku.length==1){
            ng_flag=1;
            window.alert("恐れ入りますが、一文字の名前にすることはできません");
        }
        if(ng_flag==0){
                //  フラグが0(つまり、NGワードに引っかからなかったもの)で実行する
            if(window.confirm("以後の名前が「"+namae+"」になります。よろしいでしょうか。")){
                //入力された内容の名前が良ければ実行
                localStorage.setItem("namae",namae);//名前を保存
                //性別を引き出す
                let seibetu;
                if(jouhou[0][1].checked){
                    seibetu=1;//男性
                }else if(jouhou[0][2].checked){
                    seibetu=2;//女性
                }else{
                    seibetu=3;//性別不明
                }
                //ポケモンチェックしたやつを引き出す
                let pokemon=[];
                for(let i=4;i<=31;i++){
                    if(jouhou[0][i].checked){
                        pokemon.push(i);//チェックしたポケモンを引数にする
                        console.log(pokemon);
                    }
                }
                let kusa_count=0;//草用
                let hono_count=0;//炎用
                let mizu_count=0;//水用
                pokemon.forEach((number)=>{
                    console.log(number);
                    if(number<27){
                        if(number%3==1){
                            //草タイプを選択
                            kusa_count++;
                        }else if(number%3==2){
                            //炎タイプを選択
                            hono_count++;
                        }else{
                            //水タイプを選択
                            mizu_count++;
                        }
                    }
                })
                //波動の色取得
                let ribon;
                for(let i=0;i<=14;i++){
                    if(jouhou[0][33][i].selected){
                        //何を選択しているか見る
                        ribon=jouhou[0][33][i].label;
                    }
                }
                let sentaku_ribon=ribon.substr(-4);
                if(sentaku_ribon=="グリーン"){
                    kusa_count++
                }else{
                    let betu_sentaku=sentaku_ribon.substr(-3);
                    if(betu_sentaku=="ブルー"){
                        mizu_count++;//補正
                    }else if(betu_sentaku=="レッド"){
                        hono_count++;//補正
                    }
                }
                //本格的な診断
                if(pokemon.length==1){
                    window.alert("あなたは、その選んだポケモンが好きすぎるようですね。");
                }else{
                    if(kusa_count>mizu_count&&kusa_count>hono_count){
                        window.alert("あなたは、草が好みなのですね。");
                    }else if(mizu_count>kusa_count&&mizu_count>hono_count){
                        window.alert("あなたは、水が好みなのですね。");
                    }else if(hono_count>mizu_count&&hono_count>kusa_count){
                        window.alert("あなたは、炎が好みなのですね。");
                    }else　if(hono_count>1&&mizu_count>1&&kusa_count>1){
                        window.alert("あなたは、どれもまんべんなく好きなのですね。");
                    }else{
                        window.alert("その他のポケモンがどうやら好きなようですね。")
                    }
            }
            localStorage.setItem("storn","400");
            window.alert("質問に答えてくれてありがとう");
            window.alert("初回ボーナス石400個プレゼント");
            window.location.assign("../main.html")
            }
        }
    }
}