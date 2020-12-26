// Author: Felipe Barros <felipetech@tuta.io>
// 22 September 2020

import { colors } from '../static/index.js';

function getColorsCopy() {
  const colorsCopy = [...colors];

  return colorsCopy;
}

export default getColorsCopy;
