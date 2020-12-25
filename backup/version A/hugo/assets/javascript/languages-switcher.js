// Open popup suggesting the detected user language

function getBrowserLanguage() 
{
  if (navigator.languages != undefined)
    return navigator.languages[0].slice(0, 2);
  else
    return navigator.language.slice(0, 2);
}

userLanguage = getBrowserLanguage();

var tour = new Tour({
  name: "Show language",
  debug: false,
  storage: window.localStorage,
  steps: [{
      element: "#language-switch",
      title: "Wrong language?",
      content: "This page is available in other languages 😀",
      placement: "bottom",
      delay: [1500, 0],
      duration: 10000,
      reflex: true
    }
  ]
});

availableLanguages = [{{ printf "'%s'" (delimit .Site.Languages "','") }}];
// Check if browser language matches document language and language version exists.
if (userLanguage !== document.documentElement.lang
      && availableLanguages.includes(userLanguage)) {
  // Action only if browser language is different and is available.
  tour.init();
  tour.start();
} 