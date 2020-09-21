// Author: Felipe Barros <felipetech@tuta.io>
// 12 August 2020

/**
 * @param {string} style 
 * @param {string} color 
 * @param {string} category 
 */
function getImageLink(style, color, category) 
{
  return `https://raw.githubusercontent.com/gusbemacbe/suru-plus-folders/beta/images/${style}/folder-${color}-${category}.svg?sanitize=true`;
}

export default getImageLink;
