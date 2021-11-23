let canvas_w=480;
let canvas_h=480;
//最初に1回だけ実行
function setup(){
    /**
     * @param canvas_h キャンバスの縦
     * @param canvas_w キャンバスの横
     * 上二つは判定用
     */
    createCanvas(canvas_w, canvas_h);
    background(255)
}
//グローバル関数にしないと値を読み込まないためグローバル関数にすべて直下。
let w=40
let h=40
/**
 * 
 * @param w 横幅 
 * @param h 縦幅
 */
let actor=class{
    constructor(x,y,w,h){
        //プレイヤーのx軸情報とy軸情報
        this.x=x;
        this.y=y;
        //横幅と縦幅
        this.w=w;
        this.h=h;
    }
    
}
let syoki_actor=new actor(85,85,20,20);//x,yの値はテスト
let floor_map=[]
/**
 * @param floor_map マップ
 * mapもfloorも定義されていため。
 */
//floor_mapの中身を加えるよう。
for (var i=1;i<=30;i++){
   floor_map[i]=[]//二重入れ子準備
    for(var j=1;j<=30;j++){
       if(i==1||j==1||j==30||i==30){
           floor_map[i][j]=1//1は壁
       }else if(i%2==1&&j%2==1){
           //棒倒し法のための壁
           floor_map[i][j]=1
       }else{
           floor_map[i][j]=0;//それ以外はタイル
       }
    }
}
console.log(floor_map)
//ランダムに棒を倒す
for(var i=2;i<30;i++){
   for(var j=2;j<30;j++){
       if(floor_map[i][j]==1&&j%2==1&&i%2==1){
           let muki=Math.floor(Math.random()*4)
           switch (muki){
               //向きによって倒す。
               case 0:
                   floor_map[i-1][j]=1;//上向き
               break;
               case 1:
                   floor_map[i][j+1]=1;//右向き
               break;
               case 2:
                   floor_map[i+1][j]=1;//下向き
               break;
               case 3:
                   floor_map[i][j-1]=1;//左向き
               break;
           }
       }
   }
}
class level{
    constructor(){
        this.tiles=floor_map
    }
}
//当たり判定
function hantei(){

}
//画面をずらす
class kamera{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}

//
//1フレームごとに実行
function draw(){
    /**
     * @function keyIsDown() 
        * @event LEFT_ARROW 右
        * @event RIGHT_ARROW 左
        * @event UP_ARROW 上
        * @event DOWN_ARROW 下
     */
    var kyori=5;
    /**
     * @param kyori 動く距離
     *  ５は段階的。
     */
     if (keyIsDown(LEFT_ARROW)) {
        syoki_actor.x -= kyori;
      }
    
      if (keyIsDown(RIGHT_ARROW)) {
        syoki_actor.x  += kyori;
      }
    
      if (keyIsDown(UP_ARROW)) {
        syoki_actor.y  -= kyori;
      }
    
      if (keyIsDown(DOWN_ARROW)) {
        syoki_actor.y += kyori;
      }
      clear();
      //操作にかかわるものをここに順番に設置する。
       //ダンジョンの中身
 for(var i=1;i<=30;i++){
    for(var j=1;j<=30;j++){
        if(floor_map[i][j]==1){
            fill(51)
            noStroke()
            rect(w*j, h*i, w*j, h*i)
        }else{
            fill(255)
            noStroke()
            rect(w*j, h*i, w*j, h*i)
        }
    }
}
//プレイアー操作
fill(255,0,0)
      rect(syoki_actor.x, syoki_actor.y,syoki_actor.w,syoki_actor.h);
}