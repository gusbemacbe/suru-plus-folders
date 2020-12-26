// Author: Felipe Barros <felipetech@tuta.io>
// 22 September 2020

import { categories } from '../static/index.js';

function getCategoriesCopy() {
  const categoriesCopy = [...categories];

  return categoriesCopy;
}

export default getCategoriesCopy;
