/* eslint-disable import/no-extraneous-dependencies */
const sharp = require('sharp');
const { existsSync, mkdirSync, readdirSync } = require('fs');
const { resolve } = require('path');

const target = resolve(__dirname, 'src/assets');
const destination = resolve(__dirname, 'src/public/hero');

if (!existsSync(destination)) {
  mkdirSync(destination);
}

readdirSync(target).forEach((image) => {
  sharp(`${target}/${image}`)
    .resize(1200)
    .toFile(resolve(__dirname, `${destination}/${image.split('.')
      .slice(0, -1)
      .join('.')}-large.jpg`));

  sharp(`${target}/${image}`)
    .resize(200)
    .toFile(resolve(__dirname, `${destination}/${image.split('.')
      .slice(0, -1)
      .join('.')}-mobile.jpg`));
});
