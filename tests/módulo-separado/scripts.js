// Author: Felipe Barros <felipetech@tuta.io>
// 12 August 2020

import { styles } from './static/index.js';
import makeElement from './factory/makeElement.js';
import makeStyleTableBasedOnStyleName from './factory/makeStyleTableBasedOnStyleName.js';
import addTitleToTable from './functions/addTitleToTable.js';

const tablesContainer = document.querySelector('#tables-container');

const tables = styles.map(({ name: styleName }) => {
  const table = makeStyleTableBasedOnStyleName(styleName);
  return table;
});

tables.forEach((table) => tablesContainer.appendChild(table));

styles.forEach(({ name: styleName, title: styleTitle }) => {
  const table = document.querySelector(`table#${styleName}`);

  const title = makeElement('h2');
  title.textContent = styleTitle;

  addTitleToTable(title, table);
});
