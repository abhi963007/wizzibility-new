import fs from 'fs';
import path from 'path';

try {
  const p1 = path.resolve(process.cwd(), 'pics-/step-1.svg');
  const p2 = path.resolve(process.cwd(), 'pics-/step-2.svg');
  const pCurve = path.resolve(process.cwd(), 'reference/saveweb2zip-com-framevo-webflow-io/images/6a314fb6b41bb0c8342c33aa_Ellipse 5.webp');

  const dest1 = path.resolve(process.cwd(), 'src/components/step-1.svg');
  const dest2 = path.resolve(process.cwd(), 'src/components/step-2.svg');
  const destCurve = path.resolve(process.cwd(), 'src/components/curve.webp');

  let log = 'SVG copy test log:\n';

  if (fs.existsSync(p1)) {
    fs.copyFileSync(p1, dest1);
    log += `Copied step-1.svg to ${dest1}\n`;
  } else {
    log += `p1 does not exist at: ${p1}\n`;
  }

  if (fs.existsSync(p2)) {
    fs.copyFileSync(p2, dest2);
    log += `Copied step-2.svg to ${dest2}\n`;
  } else {
    log += `p2 does not exist at: ${p2}\n`;
  }

  if (fs.existsSync(pCurve)) {
    fs.copyFileSync(pCurve, destCurve);
    log += `Copied curve.webp to ${destCurve}\n`;
  } else {
    log += `pCurve does not exist at: ${pCurve}\n`;
    // Try to list the public/images/home directory
    const dir = path.resolve(process.cwd(), 'public/images/home');
    if (fs.existsSync(dir)) {
      const files = fs.readdirSync(dir);
      log += `Files in ${dir}:\n${files.join('\n')}\n`;
    } else {
      log += `${dir} directory does not exist!\n`;
    }
  }

  fs.writeFileSync(path.resolve(process.cwd(), 'svg-report.txt'), log, 'utf8');
} catch (err) {
  fs.writeFileSync(path.resolve(process.cwd(), 'svg-report.txt'), `Error: ${err.message}\n${err.stack}`, 'utf8');
}
