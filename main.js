function buttonClick(){
    var ctx = document.getElementById("my_canvas").getContext('2d');

    var canvas_height = 500;
    var canvas_width = 500;
    var min = 30;
    var max = 470;

    for(let i = 0; i < 10; i++){
        // パスの初期化
        ctx.beginPath()

        // ランダムに座標を取得
        var x = Math.floor( Math.random() * (max + 1 - min) ) + min;
        var y = Math.floor( Math.random() * (max + 1 - min) ) + min;
    
        // 取得した座標を中心とする円を書く
        ctx.arc( x, y, 10, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
        ctx.fillStyle = "red" ;
        ctx.fill() ;
        ctx.strokeStyle = "red" ;
        ctx.lineWidth = 0 ;

    }



    // 描画内容を実行する
    ctx.stroke();

}




