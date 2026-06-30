import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dirs = ['juice', 'round', 'rect'];
const baseDir = path.join(__dirname, '../public/frames');

dirs.forEach(dir => {
  const dirPath = path.join(baseDir, dir);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  for (let i = 1; i <= 60; i++) {
    const num = String(i).padStart(3, '0');
    let svgContent = '';
    const progress = i / 60;
    
    if (dir === 'juice') {
      const fillHeight = 10 + (progress * 50); // 10 to 60
      svgContent = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="20" width="40" height="60" rx="4" fill="none" stroke="#ccc" stroke-width="2"/>
        <rect x="32" y="${80 - fillHeight}" width="36" height="${fillHeight - 2}" rx="2" fill="#ffb74d" opacity="0.8"/>
        <path d="M30 20 L70 20" stroke="#ffb74d" stroke-width="4"/>
      </svg>`;
    } else if (dir === 'round') {
      const angle = progress * 360;
      svgContent = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(50,50) rotate(${angle})">
          <ellipse cx="0" cy="0" rx="30" ry="15" fill="none" stroke="#ccc" stroke-width="2"/>
          <path d="M-30 0 v20 a30 15 0 0 0 60 0 v-20" fill="none" stroke="#ccc" stroke-width="2"/>
        </g>
      </svg>`;
    } else if (dir === 'rect') {
      const scale = 0.8 + (progress * 0.4); // 0.8 to 1.2
      svgContent = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(50,50) scale(${scale}) translate(-50,-50)">
          <rect x="20" y="30" width="60" height="40" rx="4" fill="none" stroke="#ccc" stroke-width="2"/>
          <rect x="25" y="35" width="50" height="30" fill="#e0e0e0" opacity="0.5"/>
        </g>
      </svg>`;
    }

    fs.writeFileSync(path.join(dirPath, `frame-${num}.svg`), svgContent);
  }
});
console.log('Frames generated successfully.');
