// Author: Felipe Barros <felipetech@tuta.io>
// 12 August 2020

import getCategoriesCopy from './getCategoriesCopy.js';

/**
 * @param {string} styleName
 */
function getCategoriesBasedOnStyleName(styleName) {
  const styleCategories = {
    'adwaita-plus': () => {
      const fakeCategories = getCategoriesCopy();
      fakeCategories.splice(fakeCategories.indexOf('desktop'), 1);
      fakeCategories.splice(fakeCategories.indexOf('icons'), 1);

      return fakeCategories;
    },
    'suru-plus': () => {
      const fakeCategories = getCategoriesCopy();
      return fakeCategories;
    },
    'suru-plus-ubuntu': () => {
      const fakeCategories = getCategoriesCopy();
      fakeCategories.splice(fakeCategories.indexOf('desktop'), 1);
      fakeCategories.splice(fakeCategories.indexOf('icons'), 1);
      fakeCategories.splice(fakeCategories.indexOf('visiting'), 1);

      return fakeCategories;
    },
  };

  const hasTheStyleCategoriesBeenFound = styleCategories[styleName];
  if (hasTheStyleCategoriesBeenFound) {
    return styleCategories[styleName]();
  }
}

export default getCategoriesBasedOnStyleName;
