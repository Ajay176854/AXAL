import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.resolve(__dirname, '../public');
const FRAMES_DIR = path.join(PUBLIC_DIR, 'frames');

const TARGET_WIDTH = 800;
const TARGET_HEIGHT = 450;
const ORIGINAL_FRAME_COUNT = 60;
const NEW_FRAME_COUNT = 30;

async function processFrames() {
  const categories = ['juice', 'round', 'rect'];

  for (const category of categories) {
    console.log(`Processing ${category} frames...`);
    const categoryDir = path.join(FRAMES_DIR, category);
    
    if (!fs.existsSync(categoryDir)) {
      console.warn(`Skipping ${category} - directory not found: ${categoryDir}`);
      continue;
    }

    // We will select every 2nd frame (001, 003, 005... up to 059)
    // And save them as 001, 002, 003... up to 030 in .webp
    for (let newIndex = 1; newIndex <= NEW_FRAME_COUNT; newIndex++) {
      const originalIndex = (newIndex * 2) - 1; // 1->1, 2->3, 3->5, etc.
      
      const originalNum = String(originalIndex).padStart(3, '0');
      const newNum = String(newIndex).padStart(3, '0');
      
      const originalFile = path.join(categoryDir, `frame-${originalNum}.jpg`);
      const newFile = path.join(categoryDir, `frame-${newNum}.webp`);

      if (fs.existsSync(originalFile)) {
        try {
          await sharp(originalFile)
            .webp({ lossless: true, effort: 6 })
            .toFile(newFile);
          
          console.log(`  [${category}] Created frame-${newNum}.webp (from frame-${originalNum}.jpg)`);
        } catch (err) {
          console.error(`  [${category}] Failed to process frame-${originalNum}.jpg:`, err);
        }
      } else {
        console.warn(`  [${category}] Original file not found: ${originalFile}`);
      }
    }
  }

  console.log('Frame optimization complete!');
}

processFrames().catch(console.error);
