// Author: Felipe Barros <felipetech@tuta.io>
// 12 August 2020

import makeElement from './factory/makeElement.js';
import getImageLink from './functions/getImageLink.js';
import { colors, categories, styles } from './static/index.js';
import getColorsBasedOnTheStyle from './functions/getColorsBasedOnTheStyle.js';
import getCategoriesBasedOnTheStyle from './functions/getCategoriesBasedOnTheStyle.js';

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

  const trHeader = document.createElement('tr');
  const firstHeader = makeElement('th');
  const secondHeader = makeElement('th');

  const h2Title = document.createElement('h2');

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

    const tdColorName = document.createElement('td');
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
