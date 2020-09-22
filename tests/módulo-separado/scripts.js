// Author: Felipe Barros <felipetech@tuta.io>
// 12 August 2020

import makeElement from './factory/makeElement.js';
import getImageLink from './functions/getImageLink.js';
import { colors, categories, styles } from './static/index.js';
import getColorsBasedOnTheStyle from './functions/getColorsBasedOnTheStyle.js';
import getCategoriesBasedOnTheStyle from './functions/getCategoriesBasedOnTheStyle.js';

const tables = [];

styles.forEach(({ name: styleName }) => {
  const table = makeElement('table');
  table.setAttribute('id', styleName);

  const thead = makeElement('thead');
  const tbody = makeElement('tbody');

  const trHeader = document.createElement('tr');
  const firstHeader = makeElement('th');
  const secondHeader = makeElement('th');

  firstHeader.textContent = 'Name';
  secondHeader.textContent = 'Preview';

  trHeader.appendChild(firstHeader);
  trHeader.appendChild(secondHeader);

  thead.appendChild(trHeader);

  table.appendChild(thead);

  const fakeColors = getColorsBasedOnTheStyle(colors, styleName);
  const fakeCategories = getCategoriesBasedOnTheStyle(categories, styleName);

  fakeColors.forEach((color) => {
    const trColor = makeElement('tr');

    const tdColorName = document.createElement('td');
    tdColorName.textContent = color;

    trColor.appendChild(tdColorName);

    const tdImage = makeElement('td');

    fakeCategories.forEach((category) => {
      const link = getImageLink(styleName, color, category);

      const img = makeElement('img', {
        width: '48px',
        height: '48px',
        src: link,
      });
      tdImage.appendChild(img);

      tbody.appendChild(trColor);
    });

    trColor.appendChild(tdImage);
  });

  table.appendChild(tbody);

  tables.push(table);
});

tables.forEach((table) => {
  document.body.appendChild(table);
});

styles.forEach(({ name: styleName, title: styleTitle }) => {
  const table = document.querySelector(`table#${styleName}`)

  const title = document.createElement('h2');
  title.textContent = styleTitle;

  table.insertAdjacentElement('beforebegin', title);
});
