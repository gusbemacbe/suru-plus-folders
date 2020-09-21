// Author: Felipe Barros <felipetech@tuta.io>
// 12 August 2020

/**
 * @param {string} name
 * @param {object} attributes
 * @return {HTMLElement}
 */
function makeElement(name, attributes = {}) {
  const element = document.createElement(name);

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

/**
 * @param {string} style 
 * @param {string} color 
 * @param {string} category 
 */
function getImageLink(style, color, category) {
  return `https://raw.githubusercontent.com/gusbemacbe/suru-plus-folders/beta/images/${style}/folder-${color}-${category}.svg?sanitize=true`;
}

function getCategoriesBasedOnTheStyle(categories = [], style = '') {
  const styleCategories = {
    'adwaita-plus': () => {
      let fake_categories = JSON.parse(JSON.stringify(categories));
      fake_categories.splice(fake_categories.indexOf('desktop'), 1);
      fake_categories.splice(fake_categories.indexOf('icons'), 1);

      return fake_categories;
    },
    'suru-plus': () => {
      let fake_categories = JSON.parse(JSON.stringify(categories));
      return fake_categories;
    },
    'suru-plus-ubuntu': () => {
      let fake_categories = JSON.parse(JSON.stringify(categories));
      fake_categories.splice(fake_categories.indexOf('desktop'), 1);
      fake_categories.splice(fake_categories.indexOf('icons'), 1);
      fake_categories.splice(fake_categories.indexOf('visiting'), 1);

      return fake_categories;
    },
  };

  const hasTheStyleCategoriesBeenFound = styleCategories[style];
  if (hasTheStyleCategoriesBeenFound) {
    return styleCategories[style]();
  }
}

function getColorsBasedOnTheStyle(colors = [], style = '') {
  const styleColors = {
    'adwaita-plus': () => {
      const fakeColors = JSON.parse(JSON.stringify(colors));
      fakeColors.splice(fakeColors.indexOf('90ssummer'), 1);
      fakeColors.splice(fakeColors.indexOf('aurora'), 1);
      fakeColors.splice(fakeColors.indexOf('berriez'), 1);
      fakeColors.splice(fakeColors.indexOf('black'), 1);
      fakeColors.splice(fakeColors.indexOf('blue'), 1);
      fakeColors.splice(fakeColors.indexOf('cyan'), 1);
      fakeColors.splice(fakeColors.indexOf('cyberneon'), 1);
      fakeColors.splice(fakeColors.indexOf('darkblue'), 1);
      fakeColors.splice(fakeColors.indexOf('discodingo'), 1);
      fakeColors.splice(fakeColors.indexOf('fitdance'), 1);
      fakeColors.splice(fakeColors.indexOf('magenta'), 1);
      fakeColors.splice(fakeColors.indexOf('pink'), 1);
      fakeColors.splice(fakeColors.indexOf('teal'), 1);
      fakeColors.splice(fakeColors.indexOf('vermillion'), 1);
      fakeColors.splice(fakeColors.indexOf('violet'), 1);

      return fakeColors;
    },
    'suru-plus': () => {
      let fakeColors = JSON.parse(JSON.stringify(colors));
      fakeColors.splice(fakeColors.indexOf('adwaita'), 1);
      fakeColors.splice(fakeColors.indexOf('aubergine'), 1);
      fakeColors.splice(fakeColors.indexOf('darkblue'), 1);
      fakeColors.splice(fakeColors.indexOf('purple'), 1);
      fakeColors.splice(fakeColors.indexOf('yaru'), 1);

      return fakeColors;
    },
    'suru-plus-ubuntu': () => {
      let fakeColors = JSON.parse(JSON.stringify(colors));
      fakeColors.splice(fakeColors.indexOf('90ssummer'), 1);
      fakeColors.splice(fakeColors.indexOf('adwaita'), 1);
      fakeColors.splice(fakeColors.indexOf('aurora'), 1);
      fakeColors.splice(fakeColors.indexOf('berriez'), 1);
      fakeColors.splice(fakeColors.indexOf('black'), 1);
      fakeColors.splice(fakeColors.indexOf('bluegrey'), 1);
      fakeColors.splice(fakeColors.indexOf('brown'), 1);
      fakeColors.splice(fakeColors.indexOf('cyberneon'), 1);
      fakeColors.splice(fakeColors.indexOf('desktop'), 1);
      fakeColors.splice(fakeColors.indexOf('discodingo'), 1);
      fakeColors.splice(fakeColors.indexOf('fitdance'), 1);
      fakeColors.splice(fakeColors.indexOf('grey'), 1);
      fakeColors.splice(fakeColors.indexOf('indigo'), 1);
      fakeColors.splice(fakeColors.indexOf('magenta'), 1);
      fakeColors.splice(fakeColors.indexOf('manjaro'), 1);
      fakeColors.splice(fakeColors.indexOf('mint'), 1);
      fakeColors.splice(fakeColors.indexOf('pink'), 1);
      fakeColors.splice(fakeColors.indexOf('teal'), 1);
      fakeColors.splice(fakeColors.indexOf('violet'), 1);
      fakeColors.splice(fakeColors.indexOf('white'), 1);
      fakeColors.splice(fakeColors.indexOf('yaru'), 1);

      return fakeColors;
    },
  };

  const hasTheStyleColorsBeenFound = styleColors[style];
  if (hasTheStyleColorsBeenFound) {
    return styleColors[style]();
  }
}

const categories = [
  'apps',
  'desktop',
  'documents',
  'downloads',
  'dropbox',
  'gitlab',
  'icons',
  'music',
  'open',
  'pictures',
  'visiting',
];

const colors = [
  '90ssummer',
  'adwaita',
  'aubergine',
  'aurora',
  'berriez',
  'black',
  'blue',
  'bluegrey',
  'bordeaux',
  'brown',
  'canonical',
  'cyan',
  'cyberneon',
  'darkblue',
  'discodingo',
  'fitdance',
  'green',
  'grey',
  'indigo',
  'magenta',
  'manjaro',
  'mint',
  'orange',
  'pink',
  'purple',
  'red',
  'teal',
  'vermillion',
  'violet',
  'white',
  'yaru',
  'yellow',
];

const styles = ['adwaita-plus', 'suru-plus', 'suru-plus-ubuntu'];

let stylesObj = {
  'adwaita-plus': {},
  'suru-plus': {},
  'suru-plus-ubuntu': {},
};

const tables = [];

styles.forEach((style) => {
  const table = makeElement('table');
  const thead = makeElement('thead');
  const tbody = makeElement('tbody');

  const trHeader = makeElement('tr');
  const firstHeader = makeElement('th');
  const secondHeader = makeElement('th');

  const h2Title = makeElement('h2');

  h2Title.textContent = style;
  firstHeader.textContent = 'Name';
  secondHeader.textContent = 'Preview';

  trHeader.appendChild(firstHeader);
  trHeader.appendChild(secondHeader);

  thead.prepend(h2Title);
  thead.appendChild(trHeader);

  table.appendChild(thead);

  const fakeColors = getColorsBasedOnTheStyle(colors, style);
  const fakeCategories = getCategoriesBasedOnTheStyle(categories, style);

  fakeColors.forEach((color) => {
    stylesObj[style][color] = [];

    const trColor = makeElement('tr');

    const tdColorName = makeElement('td');
    tdColorName.textContent = color;

    trColor.appendChild(tdColorName);
    fakeCategories.forEach((category) => {
      const link = getImageLink(style, color, category);

      const img = makeElement('img', {
        width: '48px',
        height: '48px',
        src: link,
      });
      const tdImage = makeElement('td');
      tdImage.appendChild(img);

      trColor.appendChild(tdImage);

      tbody.appendChild(trColor);

      stylesObj[style][color].push(link);
    });
  });

  table.appendChild(tbody);

  tables.push(table);
});

tables.forEach((table) => {
  document.body.appendChild(table);
});
