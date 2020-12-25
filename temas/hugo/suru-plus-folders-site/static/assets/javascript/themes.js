const themes = {
  "theme-dark": "../assets/css/syntax-highlighting/suru-plus.css",
  "theme-light": "../assets/css/syntax-highlighting/suru-plus.css",
  "theme-cyberpunk": "../assets/css/syntax-highlighting/cyberpunk.css",
  "theme-tron": "../assets/css/syntax-highlighting/tron.css",
  "theme-synthwave-84": "../assets/css/syntax-highlighting/synthwave-84.css"
};

function changeTheme(newTheme) {
  var allThemes = Object.keys(themes);
  if (!allThemes.includes(newTheme)) return;
  allThemes.forEach(theme => document.body.classList.remove(theme));
  document.body.classList.add(newTheme);
  document.getElementById('theme_css').href = themes[newTheme];
  localStorage.setItem('theme', newTheme);
}

// wire up buttons
document.querySelectorAll('.theme-switch').forEach(button => {
  button.onclick = () => changeTheme(button.id);
});

// load saved theme
changeTheme(localStorage.getItem('theme'));