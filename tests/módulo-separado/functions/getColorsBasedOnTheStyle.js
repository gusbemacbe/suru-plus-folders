// Author: Felipe Barros <felipetech@tuta.io>
// 12 August 2020

import getColorsCopy from './getColorsCopy.js';

function getColorsBasedOnTheStyle(style) {
  const styleColors = {
    'adwaita-plus': () => {
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
      fakeColors.splice(fakeColors.indexOf('teal'), 1);
      fakeColors.splice(fakeColors.indexOf('vermillion'), 1);
      fakeColors.splice(fakeColors.indexOf('violet'), 1);

      return fakeColors;
    },
    'suru-plus': () => {
      const fakeColors = getColorsCopy();
      fakeColors.splice(fakeColors.indexOf('adwaita'), 1);
      fakeColors.splice(fakeColors.indexOf('aubergine'), 1);
      fakeColors.splice(fakeColors.indexOf('darkblue'), 1);
      fakeColors.splice(fakeColors.indexOf('purple'), 1);
      fakeColors.splice(fakeColors.indexOf('yaru'), 1);

      return fakeColors;
    },
    'suru-plus-ubuntu': () => {
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
      fakeColors.splice(fakeColors.indexOf('teal'), 1);
      fakeColors.splice(fakeColors.indexOf('violet'), 1);
      fakeColors.splice(fakeColors.indexOf('white'), 1);
      fakeColors.splice(fakeColors.indexOf('yaru'), 1);

      return fakeColors;
    },
  };

  const hasTheStyleColorBeenFound = styleColors[style];
  if (hasTheStyleColorBeenFound) {
    return styleColors[style]();
  }
}

export default getColorsBasedOnTheStyle;
