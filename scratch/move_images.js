import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base directory paths
const imagesDir = path.resolve(__dirname, '../public/images');
const homeDir = path.join(imagesDir, 'home');

// Ensure destination directory exists
if (!fs.existsSync(homeDir)) {
  fs.mkdirSync(homeDir, { recursive: true });
  console.log('Created directory:', homeDir);
}

// List of base filenames (without extensions or -p-* variants)
const baseImageNames = [
  '6a356f5456ef1a53f0f6f826_7782b6bf6ea462330fdb471ee69d6f709461c3f2',
  '6a356f69fd4f8718f8c20f44_717887a9f039712b0380565e87774a542a5e5727',
  '6a356f7a7328f22b398385f8_61975c7043a75c5376431e97031e5a4d2631ccd4',
  '6a3514ef9e312a69a772c2c0_8971c848c2638f539d50757c3cbdcfa62708d35c',
  '6a3514e18cb733c985d735eb_054f97113db54086c0f159ca559fbaea76ca59c9',
  '6a3514d344d27a821e163d62_c39acb39f24eaae1617e34596fcd880c93c2af1a',
  '6a2fd4c166aa567e67e7901e_image 57367',
  '6a2fd4c24d9c1fd8d2a43a4a_image 57368 (1)',
  '6a2fd69280be1041c486ea15_image 57373 (3)',
  '6a2fd69177fc7a358ffe83b0_image 57369 (1)',
  '6a2fd692d5a0f9b716ac6d45_image 57377',
  '6a2fd69290263b0be396f5c5_image 57371 (1)',
  '6a2fd6923e5daf11466f37d8_image 57372',
  '6a2fd693f5522ea31fb56b52_image 57374',
  '6a2fd69175bdfa92ffab8888_image 57375 (1)',
  '6a2fd692e6d38fcb2570642c_image 57376',
  '6a2fd693ef8e25bcc8cb25ef_image 57370 (1)',
  '6a2fdb77859e335168fa06d4_image 57387 (1)',
  '6a3452aaac57c482ba42872c_3077e770cdd04ed4421b756812d0ca9c9b8933a7',
  '6a3452a7e8b89d5850831283_e99b98690dd0e97f74d7db5b770bb989e634ab7c',
  '6a3452a73f041d6e38e3c63a_9275859a8a5d77330830771699639a1c0e3123ff',
  '6a34034a534a177bb2c50b74_Contemplative Profile in Color Gradient',
  '6a2fd691512d2eebe845225f_image 57378',
  '6a32f96f6e5d3efb008fbb33_1c77cef06aaf126d1d6c25d3ebe80b7cb39fe0c5',
  '6a32f68243bd61f703504b7e_662eab522ab6ce8bf8e08b76e6992bb21e5365a4',
  '6a32f97242ecfd2a31f27c73_e1d9a0b1de7bd9df1def9c845c2a857def6c8c26'
];

try {
  const files = fs.readdirSync(imagesDir);
  let count = 0;

  files.forEach((file) => {
    // Skip if it's already a directory
    const fullPath = path.join(imagesDir, file);
    if (fs.statSync(fullPath).isDirectory()) return;

    // Check if the filename starts with any of the base names
    const match = baseImageNames.some((baseName) => {
      // Direct file match (e.g. baseName.webp) or p-responsive (e.g. baseName-p-500.webp)
      return file === `${baseName}.webp` || file.startsWith(`${baseName}-p-`);
    });

    if (match) {
      const destPath = path.join(homeDir, file);
      fs.renameSync(fullPath, destPath);
      console.log(`Moved: ${file} -> home/`);
      count++;
    }
  });

  console.log(`Successfully moved ${count} image files.`);
} catch (error) {
  console.error('Error during moving files:', error);
}
