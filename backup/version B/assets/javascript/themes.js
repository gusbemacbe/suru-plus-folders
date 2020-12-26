// DOM Elements

const darkButton = document.getElementById('theme-dark');
const lightButton = document.getElementById('theme-light');
const synthwaveButton = document.getElementById('theme-synthwave-84');
const cyberpunkButton = document.getElementById('theme-cyberpunk');
const tronButton = document.getElementById('theme-tron');
const body = document.body;

// Apply the cached theme on reload

var check = document.getElementById('theme_css').classList[0] === 'theme-light';

const theme = localStorage.getItem('theme');
var element = document.getElementById('theme_css');

if (theme) 
{
  body.classList.add(theme);
}

// Button Event Handlers

darkButton.onclick = () => 
{
  element.href = '../assets/css/syntax highlighting/suru-plus.css';
  body.classList.replace('theme-light', 'theme-dark');
  body.classList.replace('theme-synthwave-84', 'theme-dark');
  body.classList.replace('theme-cyberpunk', 'theme-dark');
  body.classList.replace('theme-tron', 'theme-dark');
  localStorage.setItem('theme', 'theme-dark');
};

lightButton.onclick = () => 
{
  element.href = '../assets/css/syntax highlighting/suru-plus.css';
  body.classList.replace('theme-dark', 'theme-light');
  body.classList.replace('theme-synthwave-84', 'theme-light');
  body.classList.replace('theme-cyberpunk', 'theme-light');
  body.classList.replace('theme-tron', 'theme-light');
  localStorage.setItem('theme', 'theme-light');
};

synthwaveButton.onclick = () => 
{
  element.href = '../assets/css/syntax highlighting/synthwave-84.css';
  body.classList.replace('theme-dark', 'theme-synthwave-84');
  body.classList.replace('theme-light', 'theme-synthwave-84');
  body.classList.replace('theme-cyberpunk', 'theme-synthwave-84');
  body.classList.replace('theme-tron', 'theme-synthwave-84');
  localStorage.setItem('theme', 'theme-synthwave-84');
};

cyberpunkButton.onclick = () => 
{
  body.classList.replace('theme-dark', 'theme-cyberpunk');
  body.classList.replace('theme-light', 'theme-cyberpunk');
  body.classList.replace('theme-synthwave-84', 'theme-cyberpunk');
  body.classList.replace('theme-tron', 'theme-cyberpunk');
  localStorage.setItem('theme', 'theme-cyberpunk');
};

tronButton.onclick = () => 
{
  body.classList.replace('theme-dark', 'theme-tron');
  body.classList.replace('theme-light', 'theme-tron');
  body.classList.replace('theme-synthwave-84', 'theme-tron');
  body.classList.replace('theme-cyberpunk', 'theme-tron');
  localStorage.setItem('theme', 'theme-tron');
};