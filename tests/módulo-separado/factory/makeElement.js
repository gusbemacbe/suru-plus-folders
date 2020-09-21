// Author: Felipe Barros <felipetech@tuta.io>
// 12 August 2020

/**
 * @param {string} name
 * @param {object} attributes
 * @return {HTMLElement}
 */
function makeElement(name, attributes = {}) {
  const element = document.createElement(name);

  Object.entries(attributes).forEach(([key, value]) => {
    element.setAttribute(key, value);
  });

  return element;
}

export default makeElement;
