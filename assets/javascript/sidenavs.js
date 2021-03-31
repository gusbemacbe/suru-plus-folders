import initSidenav, { useSidenav } from './initSidenavs.js';

const [main, mainOpener, mainClosing] = useSidenav(
    '#main-nav',
    '#main-opener',
    '#main-closing'
);

const [themes, themesOpener, themesClosing] = useSidenav(
    '#themes-nav',
    '#themes-opener',
    '#themes-closing'
);

const [languages, languagesOpener, languagesClosing] = useSidenav(
    '#languages-nav',
    '#languages-opener',
    '#languages-closing'
);

initSidenav(main, mainClosing, [mainOpener, themesOpener, languagesOpener]);
initSidenav(themes, themesClosing, [themesOpener, mainOpener, languagesOpener]);
initSidenav(languages, languagesClosing, [
    languagesOpener,
    mainOpener,
    themesOpener,
]);
