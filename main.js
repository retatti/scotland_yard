var canvas_height = 500;
var canvas_width = 800;
var x_min = 30;
var x_max = 770;
var y_min = 30;
var y_max = 470;

draw_background();

function buttonClick(){
    
    var ctx = document.getElementById("my_canvas").getContext('2d');

    for(let i = 0; i < 10; i++){
        // パスの初期化
        ctx.beginPath()

        // ランダムに座標を取得
        x = Math.floor( Math.random() * (x_max + 1 - x_min) ) + x_min;
        y = Math.floor( Math.random() * (y_max + 1 - y_min) ) + x_min;
    
        // 取得した座標を中心とする円を描く
        ctx.arc( x, y, 10, 0 * Math.PI / 180, 360 * Math.PI / 180, false ) ;
        ctx.fillStyle = "black" ;
        ctx.fill() ;
        ctx.strokeStyle = "black" ;
        ctx.lineWidth = 0 ;

    }
    
    // 描画内容の実行
    ctx.stroke();
}



function draw_background() {
    var ctx = document.getElementById("my_canvas").getContext('2d');
    ctx.fillStyle = "#45cc82";  // 単色塗り
    ctx.fillRect(0, 0, canvas_width, canvas_height);
    var imageData = ctx.getImageData(0,0,canvas_width,canvas_height);
    var arrRGBA = imageData.data;
    console.log(imageData);


    for (var i = 0, l = arrRGBA.length; i < l; i += 4) {
        var per = 0;
        var rnd = Math.random();
        if (rnd < 0.2) {
            per = Math.random() * 5 + 3;
        } else if (rnd > 0.8) {
            per = Math.random() * -2 - 1;
        }
        arrRGBA[i + 0] = colorPer(arrRGBA[i + 0], per);
        arrRGBA[i + 1] = colorPer(arrRGBA[i + 1], per);
        arrRGBA[i + 2] = colorPer(arrRGBA[i + 2], per);
        arrRGBA[i + 3] = arrRGBA[i + 3];
    }
    ctx.putImageData(imageData, 0, 0);
}


function colorPer(value, per) {
    if (per === 0) return value;
    var newValue = value + Math.floor(value * per / 100);
    newValue = (newValue > 255) ? 255 : newValue;
    newValue = (newValue < 0) ? 0 : newValue;
    return newValue;
}
