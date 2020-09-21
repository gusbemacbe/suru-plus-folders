// Author: Felipe Barros <felipetech@tuta.io>
// 12 August 2020

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

export default getCategoriesBasedOnTheStyle;
