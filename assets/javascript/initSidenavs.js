import Sidenav, {
    compose,
    delay,
    focusIn,
    disableElements,
    enableElements,
    objectValues,
} from './models.js';

const delay500Milli = delay(500);

export const useSidenav = (
    sidenavSelector,
    openerSelector,
    closingSelector
) => [
    new Sidenav(document.querySelector(sidenavSelector)),
    document.querySelector(openerSelector),
    document.querySelector(closingSelector),
];

const initSidenav = (sidenav, closing, openers) => {
    const [opener] = openers;
    sidenav
        .onOpen(
            compose(
                () => delay500Milli().then(focusIn(closing)),
                disableElements(openers)
            )
        )
        .onClose(
            compose(
                () => delay500Milli().then(focusIn(opener)),
                enableElements(openers)
            )
        );

    opener.addEventListener('click', sidenav.open);
    closing.addEventListener('click', sidenav.close);
};

export default initSidenav;
