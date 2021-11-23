/*時間を取得するプログラム*/
function jikan(){
let ima=new Date();
let hikidasi={
    y:ima.getFullYear(),
    tuki:ima.getMonth()+1,
    d:ima.getDate(),
    h:ima.getHours(),
    hun:ima.getMinutes()
}
console.log(hikidasi);
return hikidasi
}
jikan();
//const jikan=()=>{}も行けるが、別ファイルの読み込みができない可能性があるのでやめる。