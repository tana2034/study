var canvas = document.getElementById('canvas'),
context = canvas.getContext('2d');

// 四角形の角を丸くする
context.lineJoin = 'round';
// 矩形描画時の線の細さ
context.lineWidth = 30;

context.font = '24px Helvetica';
// 文字列を描画
context.fillText('Click anywhere to erase', 175, 200);

// 四角い矩形を描画
context.strokeRect(75, 100, 200, 200);
context.fillRect(325, 100, 200, 200);

context.canvas.onmousedown = function (e) {
  context.clearRect(0, 0, canvas.width, canvas.height);
};
