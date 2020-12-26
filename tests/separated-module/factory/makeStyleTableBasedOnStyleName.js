// Author: Felipe Barros <felipetech@tuta.io>
// 22 September 2020

import makeElement from './makeElement.js';
import getImageLink from '../functions/getImageLink.js';
import getColorsBasedOnStyleName from '../functions/getColorsBasedOnStyleName.js';
import getCategoriesBasedOnStyleName from '../functions/getCategoriesBasedOnStyleName.js';

/**
 * @param {string} styleName
 */
function makeStyleTableBasedOnStyleName(styleName) {
  const table = makeElement('table');
  table.setAttribute('id', styleName);

  const thead = makeElement('thead');
  const tbody = makeElement('tbody');

  const trHeader = makeElement('tr');
  const firstHeader = makeElement('th', {class: 'c'});
  const secondHeader = makeElement('th', {class: 'c'});

  firstHeader.textContent = 'Name';
  secondHeader.textContent = 'Preview';

  trHeader.appendChild(firstHeader);
  trHeader.appendChild(secondHeader);

  thead.appendChild(trHeader);

  table.appendChild(thead);

  const fakeColors = getColorsBasedOnStyleName(styleName);
  const fakeCategories = getCategoriesBasedOnStyleName(styleName);

  fakeColors.forEach((color) => {
    const trColor = makeElement('tr');

    const tdColorName = makeElement('td');
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

  return table;
}

export default makeStyleTableBasedOnStyleName;
