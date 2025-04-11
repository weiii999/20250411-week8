function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255); // 白色背景 (RGB: 255, 255, 255)
}let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background(255); // 背景設為白色

  // 生成 40 個圓的初始屬性
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(30, 100),
      color: color(random(255), random(255), random(255)) // 隨機鮮豔顏色
    });
  }
}

function draw() {
  background(255); // 每次重繪背景為白色

  // 根據滑鼠位置調整圓的大小
  let sizeOffset = map(mouseX, 0, width, 20, 120);

  // 繪製圓
  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size + sizeOffset);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 畫布隨視窗大小調整
}
