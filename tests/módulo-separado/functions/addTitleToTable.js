// Author: Felipe Barros <felipetech@tuta.io>
// 22 September 2020

/**
 * @param {HTMLElement} title
 * @param {HTMLElement} table
 */
function addTitleToTable(title, table) {
  table.insertAdjacentElement('beforebegin', title);
}

export default addTitleToTable;
