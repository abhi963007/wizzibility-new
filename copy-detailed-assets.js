import fs from 'fs';
import path from 'path';

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// 1. Copy Images
try {
  copyDir('./reference/project-detailed-page/images', './public/images');
  console.log('Project detailed page images copied successfully');
} catch (err) {
  console.error('Error copying images:', err);
}

// 2. Copy Webflow JS script
try {
  const scriptSrc = './reference/project-detailed-page/js/webflow.36540518.b49536ec3bcaf7fa.js';
  const scriptDest = './public/js/webflow.36540518.b49536ec3bcaf7fa.js';
  if (fs.existsSync(scriptSrc)) {
    const destDir = path.dirname(scriptDest);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }
    fs.copyFileSync(scriptSrc, scriptDest);
    console.log('Project detailed Webflow script copied successfully');
  } else {
    console.warn('Source Webflow script not found:', scriptSrc);
  }
} catch (err) {
  console.error('Error copying Webflow script:', err);
}
