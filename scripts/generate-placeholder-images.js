const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// 确保public/games目录存在
const gamesDir = path.join(process.cwd(), 'public', 'games');
if (!fs.existsSync(gamesDir)) {
  fs.mkdirSync(gamesDir, { recursive: true });
}

// 创建占位图片
function createPlaceholderImage(filename, text) {
  const width = 800;
  const height = 600;
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // 背景
  ctx.fillStyle = '#2563eb';
  ctx.fillRect(0, 0, width, height);

  // 文字
  ctx.fillStyle = '#ffffff';
  ctx.font = 'bold 48px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // 保存图片
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(path.join(gamesDir, filename), buffer);
}

// 为每个游戏创建占位图片
const games = [
  { filename: 'heroes-assemble.jpg', title: 'Heroes Assemble' },
  { filename: 'tower-fall.jpg', title: 'Tower Fall' },
  { filename: 'speed-master.jpg', title: 'Speed Master' },
];

games.forEach((game) => {
  createPlaceholderImage(game.filename, game.title);
  console.log(`Created placeholder image for ${game.title}`);
});
