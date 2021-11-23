let huragu=localStorage.getItem("youkoso");
let husei=localStorage.getItem("totyuu");//説明中に更新した罰?
let roguin=localStorage.getItem("jikan");//過去にログインしているか
let form="入力/nyuryoku.html";
if(!huragu && !husei && !roguin){
//初めての訪問
localStorage.setItem("jikan",JSON.stringify(jikan()));//最初に時間をセット
localStorage.setItem("totyuu","1");//途中で更新すると別のやつが起動するよう
window.alert("おかえりなさ...");
window.alert("おっと、失礼いたしました。")
window.alert("始めましてだね。")
window.alert("この世界はポケモン不思議のダンジョンに登場したポケモンたちがソーシャルゲームになって帰ってきました")
window.alert("その名もポケモンエクストラ、略して、ポケエクです。")
window.alert("ポケモンを集めたり、ガチャを引いたり、ダンジョンを冒険したり。")
window.alert("まるで、ポケダンをプレイしているかのようです。(大嘘)")
window.alert("(あまり期待しないでください。私にとってはとても時間をかけて作った拙作にしか過ぎないので)")
window.alert("それと、ポケダンのネタバレになるので、先にポケダンをプレイするのがおすすめです。");
window.alert("それではいってらっしゃいませ!ポケエクの世界へ!!")
localStorage.setItem("totyuu","0");//最後まで聞いたフラグ
window.location.assign(form);//リダイレクト
}else if(husei=="1"){
    //説明の途中で更新したやつ用
    localStorage.setItem("totyuu","2");//また更新用
    window.alert("おかえりなさ...");
    window.alert("おっと、失礼いたしました。");
    window.alert("初めまし...あれ?");
    window.alert("話を聞かずに更新してしまいました?");
    window.alert("わざとじゃないですよね。");
    window.alert("もう一回更新したらただじゃ置かないからね。");
    window.alert("わかったね。もう説明するのはやめた。");
    window.alert("ようこそ。ポケエクの世界へ。以上");
    localStorage.setItem("totyuu","0");
    window.location.assign(form);//リダイレクト
}else if(husei=="2"){
    localStorage.setItem("totyuu","3");//また更新用
    window.alert("...そうか、あなたは理解していない。")
    window.alert("メッセージ文の変化を見たい人なんだね。")
    window.alert("これ以上のメッセージ文の変化はないよ。さっさとOK押しな。")
    localStorage.setItem("totyuu","0");
    window.location.assign(form);//リダイレクト
}else if(husei=="3"){
    window.alert("ようこそ。")
    localStorage.setItem("totyuu","0");
    window.location.assign(form);//リダイレクト
}else if(roguin){
    let hikaku_ima=jikan();//今の時間を取得
    roguin=JSON.parse(roguin)
    if(roguin.d!=hikaku_ima.d){
        let isi=localStorage.getItem("storn");//最初に取得
        isi=JSON.parse(isi);
        let namae=localStorage.getItem("namae");//名前も取得
        window.alert("おかえりなさい"+namae+"さん。");
        window.alert("ログインボーナスで石を20個付与します。");
        isi+=20;
        localStorage.setItem("storn",JSON.stringify(isi));//再度保存
        localStorage.setItem("jikan",JSON.stringify(jikan()))
    }else if(roguin.tuki!=hikaku_ima.tuki){
        //週が違うけど最後にログインした日が一緒の時
        let isi=localStorage.getItem("storn");//最初に取得
        isi=JSON.parse(isi);
        let namae=localStorage.getItem("namae");//名前も取得
        window.alert("おかえりなさい"+namae+"さん。");
        window.alert("最後のログインと同じ日にログインしましたね。");
        window.alert("珍しいので石を3000こ付与します。");
        isi+=3000;
        localStorage.setItem("storn",JSON.stringify(isi));//再度保存
        localStorage.setItem("jikan",JSON.stringify(jikan()))
    }else if(roguin.y!=hikaku_ima.y){
        //年が違うけど、週と日にちが一致したとき
        let isi=localStorage.getItem("storn");//最初に取得
        isi=JSON.parse(isi);
        let namae=localStorage.getItem("namae");//名前も取得
        window.alert("おかえりなさい"+namae+"さん。");
        window.alert("最後のログインと同じ日、同じ週ということは1年以上ぶりかね。");
        window.alert("...ここまで隠しメッセージを見たいとは...。");
        window.alert("ありがたさを込めて、石を100000個付与します。")
        isi+=100000;
        localStorage.setItem("storn",JSON.stringify(isi));//再度保存
        localStorage.setItem("jikan",JSON.stringify(jikan()))
    }
}