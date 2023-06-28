const fs = require('fs');
const Terser = require('terser');

// Read the input files
const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('styles.css', 'utf8');
const js = fs.readFileSync('script.js', 'utf8');

// Minify HTML
const minifiedHTML = Terser.minify(html, {
  compress: true,
  mangle: true,
}).code;

// Minify CSS
const minifiedCSS = Terser.minify(css, {
  compress: true,
  mangle: true,
}).code;

// Minify JavaScript
const minifiedJS = Terser.minify(js, {
  compress: true,
  mangle: true,
}).code;

// Write the compressed files
fs.writeFileSync('index.min.html', minifiedHTML, 'utf8');
fs.writeFileSync('styles.min.css', minifiedCSS, 'utf8');
fs.writeFileSync('script.min.js', minifiedJS, 'utf8');

console.log('Compression completed!');
