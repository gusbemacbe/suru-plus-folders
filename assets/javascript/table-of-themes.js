// Author: Felipe Barros <felipetech@tuta.io>
// 12 August 2020

'{{ $path := "../assets/images/icons"}}'

'{{ if .IsTranslated }}'

const categories = 
[
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

const colors = 
[
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
  'synthwave',
  'teal',
  'vermillion',
  'violet',
  'white',
  'yaru',
  'yellow',
];

var preTtitle = '{{ i18n "preTtitle" }}';

const styles = 
[
  { name: 'adwaita-plus', title: ' ' + preTtitle + 'Adwaita++' },
  { name: 'suru-plus', title: ' ' + preTtitle + 'Suru++' },
  { name: 'suru-plus-ubuntu', title: ' ' + preTtitle + 'Ubuntu++' },
  { name: 'yaru-plus', title: ' ' + preTtitle + 'Yaru++' }
];

function getCategoriesCopy() 
{
  const categoriesCopy = [...categories];

  return categoriesCopy;
}

function getColorsCopy() 
{
  const colorsCopy = [...colors];

  return colorsCopy;
}

/**
 * @param {string} style 
 * @param {string} color 
 * @param {string} category 
 */
function getImageLink(style, color, category) 
{
  // return `https://raw.githubusercontent.com/gusbemacbe/suru-plus-folders/beta/images/${style}/folder-${color}-${category}.svg?sanitize=true`;
  return `{{ $path }}/${style}/folder-${color}-${category}.svg?sanitize=true`;
}

/**
 * @param {string} name
 * @param {object} attributes
 * @return {HTMLElement}
 */
function makeElement(name, attributes = {}) 
{
  const element = document.createElement(name);

  Object.entries(attributes).forEach(([key, value]) => 
  {
    element.setAttribute(key, value);
  });

  return element;
}

/**
 * @param {string} styleName
 */
function getCategoriesBasedOnStyleName(styleName) 
{
  const styleCategories = 
  {
    'adwaita-plus': () => 
    {
      const fakeCategories = getCategoriesCopy();
      fakeCategories.splice(fakeCategories.indexOf('desktop'), 1);
      fakeCategories.splice(fakeCategories.indexOf('icons'), 1);

      return fakeCategories;
    },
    'suru-plus': () => 
    {
      const fakeCategories = getCategoriesCopy();
      return fakeCategories;
    },
    'suru-plus-ubuntu': () => 
    {
      const fakeCategories = getCategoriesCopy();
      fakeCategories.splice(fakeCategories.indexOf('desktop'), 1);
      fakeCategories.splice(fakeCategories.indexOf('icons'), 1);
      fakeCategories.splice(fakeCategories.indexOf('visiting'), 1);

      return fakeCategories;
    },
    'yaru-plus': () => 
    {
      const fakeCategories = getCategoriesCopy();
      fakeCategories.splice(fakeCategories.indexOf('desktop'), 1);
      fakeCategories.splice(fakeCategories.indexOf('icons'), 1);

      return fakeCategories;
    }
  };

  const hasTheStyleCategoriesBeenFound = styleCategories[styleName];
  if (hasTheStyleCategoriesBeenFound) 
  {
    return styleCategories[styleName]();
  }
}

/**
 * @param {string} styleName
 */
function getColorsBasedOnStyleName(styleName) 
{
  const styleColors = 
  {
    'adwaita-plus': () => 
    {
      const fakeColors = getColorsCopy();
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
      fakeColors.splice(fakeColors.indexOf('synthwave'), 1);
      fakeColors.splice(fakeColors.indexOf('teal'), 1);
      fakeColors.splice(fakeColors.indexOf('vermillion'), 1);
      fakeColors.splice(fakeColors.indexOf('violet'), 1);

      return fakeColors;
    },
    'suru-plus': () => 
    {
      const fakeColors = getColorsCopy();
      fakeColors.splice(fakeColors.indexOf('adwaita'), 1);
      fakeColors.splice(fakeColors.indexOf('aubergine'), 1);
      fakeColors.splice(fakeColors.indexOf('darkblue'), 1);
      fakeColors.splice(fakeColors.indexOf('purple'), 1);
      fakeColors.splice(fakeColors.indexOf('synthwave'), 1);
      fakeColors.splice(fakeColors.indexOf('yaru'), 1);

      return fakeColors;
    },
    'suru-plus-ubuntu': () => 
    {
      const fakeColors = getColorsCopy();
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
      fakeColors.splice(fakeColors.indexOf('synthwave'), 1);
      fakeColors.splice(fakeColors.indexOf('teal'), 1);
      fakeColors.splice(fakeColors.indexOf('violet'), 1);
      fakeColors.splice(fakeColors.indexOf('white'), 1);
      fakeColors.splice(fakeColors.indexOf('yaru'), 1);

      return fakeColors;
    },
    'yaru-plus': () => 
    {
      const fakeColors = getColorsCopy();
      fakeColors.splice(fakeColors.indexOf('90ssummer'), 1);
      fakeColors.splice(fakeColors.indexOf('aurora'), 1);
      fakeColors.splice(fakeColors.indexOf('berriez'), 1);
      fakeColors.splice(fakeColors.indexOf('black'), 1);
      fakeColors.splice(fakeColors.indexOf('bluegrey'), 1);
      fakeColors.splice(fakeColors.indexOf('brown'), 1);
      fakeColors.splice(fakeColors.indexOf('cyan'), 1);
      fakeColors.splice(fakeColors.indexOf('cyberneon'), 1);
      fakeColors.splice(fakeColors.indexOf('discodingo'), 1);
      fakeColors.splice(fakeColors.indexOf('fitdance'), 1);
      fakeColors.splice(fakeColors.indexOf('grey'), 1);
      fakeColors.splice(fakeColors.indexOf('indigo'), 1);
      fakeColors.splice(fakeColors.indexOf('magenta'), 1);
      fakeColors.splice(fakeColors.indexOf('pink'), 1);
      fakeColors.splice(fakeColors.indexOf('teal'), 1);
      fakeColors.splice(fakeColors.indexOf('violet'), 1);
      fakeColors.splice(fakeColors.indexOf('white'), 1);

      return fakeColors;
    }
  };

  const hasTheStyleColorBeenFound = styleColors[styleName];
  if (hasTheStyleColorBeenFound) 
  {
    return styleColors[styleName]();
  }
}

/**
 * @param {string} styleName
 */
function makeStyleTableBasedOnStyleName(styleName) 
{
  const table = makeElement('table');
  table.setAttribute('id', styleName);

  const thead = makeElement('thead');
  const tbody = makeElement('tbody');

  const trHeader = makeElement('tr');
  const firstHeader = makeElement('th', { class: 'c' });
  const secondHeader = makeElement('th', { class: 'c' });

  firstHeader.textContent = '{{ i18n "theme_name" }}';
  secondHeader.textContent = '{{ i18n "theme_preview" }}';

  trHeader.appendChild(firstHeader);
  trHeader.appendChild(secondHeader);

  thead.appendChild(trHeader);

  table.appendChild(thead);

  const fakeColors = getColorsBasedOnStyleName(styleName);
  const fakeCategories = getCategoriesBasedOnStyleName(styleName);

  fakeColors.forEach((color) => 
  {
    const trColor = makeElement('tr');

    const tdColorName = makeElement('td');
    tdColorName.textContent = color;

    trColor.appendChild(tdColorName);

    const tdImage = makeElement('td');

    fakeCategories.forEach((category) => 
    {
      const link = getImageLink(styleName, color, category);

      const img = makeElement('img', 
      {
        alt: `${color} ${category} ${styleName} icon`,
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

/**
 * @param {HTMLElement} title
 * @param {HTMLElement} table
 */
function addTitleToTable(title, table) 
{
  table.insertAdjacentElement('beforebegin', title);
}

const tablesContainer = document.querySelector('#tables-container');

const tables = styles.map(({ name: styleName }) => 
{
  const table = makeStyleTableBasedOnStyleName(styleName);
  return table;
});

tables.forEach((table) => tablesContainer.appendChild(table));

styles.forEach(({ name: styleName, title: styleTitle }) => 
{
  const table = document.querySelector(`table#${styleName}`);

  const title = makeElement('h2');
  title.textContent = styleTitle;

  addTitleToTable(title, table);
});

'{{ end }}'
