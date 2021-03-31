/**
 * @typedef {object} SidenavOptions
 *
 * @prop {boolean} expanded
 * @prop {string} openClass
 * @prop {(sidenav: Sidenav) => null} onOpen
 * @prop {(sidenav: Sidenav) => null} onClose
 */

/**
 * @typedef {Pick<SidenavOptions, "openClass"|"onOpen">} SidenavOpenerOptions
 */

/**
 * @typedef {Pick<SidenavOptions, "openClass"|"onClose">} SidenavClosingOptions
 */

/*=============================================
= *                Classes                  * =
=============================================*/

export default class Sidenav {
    /**
     * @param {HTMLElement} sidenav
     * @param {SidenavOptions} options
     */
    constructor(sidenav, options = {}) {
        /**
         * @private
         * @type {HTMLElement}
         */
        this.sidenav = sidenav;

        /**
         * @private
         * @type {Omit<SidenavOptions, "expanded", "openClass">}
         */
        this.options = {
            openClass: 'is-open',
            onOpen: () => null,
            onClose: () => null,
            ...options,
        };

        /**
         * @readonly
         * @type {string}
         */
        this.openClass = options.openClass || 'is-open';

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);

        if (options.expanded) this.open();
        else this.close();
    }

    onOpen(handler) {
        this.options.onOpen = handler;
        return this;
    }

    onClose(handler) {
        this.options.onClose = handler;
        return this;
    }

    /** @returns {this} */
    open() {
        this.sidenav.classList.add(this.openClass);
        this.sidenav.setAttribute('aria-expanded', true);

        this.options.onOpen(this);

        return this;
    }

    /** @returns {this} */
    close() {
        this.sidenav.classList.remove(this.openClass);
        this.sidenav.setAttribute('aria-expanded', false);

        this.options.onClose(this);

        return this;
    }
}

/*=============================================
= *                    DOM                  * =
=============================================*/

/**
 * @param {HTMLElement} element
 * @returns {void}
 */
export function disable(element, openClass = 'is-open') {
    element.classList.add(openClass);
    element.setAttribute('disabled', true);
    element.setAttribute('aria-hidden', true);
}

/**
 * @param {HTMLElement} element
 * @returns {void}
 */
export function enable(element, openClass = 'is-open') {
    element.classList.remove(openClass);
    element.removeAttribute('disabled');
    element.setAttribute('aria-hidden', false);
}

/**
 * @param {HTMLElement[]} elements
 * @returns {void}
 */
export const disableElements = (elements) => () => elements.forEach(disable);

/**
 * @param {HTMLElement[]} elements
 * @returns {void}
 */
export const enableElements = (elements) => () => elements.forEach(enable);

/** @type {(element: HTMLElement) => () => void} */
export const focusIn = (element) => () => element.focus();

/*=============================================
= *                    UTIL                 * =
=============================================*/
export const compose = (...fns) => (x) => fns.reduceRight((y, f) => f(y), x);

/** @type {(time: number) => () => Promise<number>} */
export const delay = (time) => () => {
    return new Promise((resolve) => {
        const timeout = setTimeout(() => resolve(timeout), time);
    });
};

export const objectValues = (object) => {
    return Object.keys(object).map((key) => object[key]);
};
